import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const index = trimmed.indexOf('=');
    if (index === -1) return;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

async function sync() {
  console.log("Fetching songs from Supabase...");
  const { data: songs, error } = await supabase.from('canciones').select('*');
  
  if (error) {
    console.error("Error fetching songs:", error);
    return;
  }

  if (!songs || songs.length === 0) {
    console.log("No songs found to sync.");
    return;
  }

  console.log(`Found ${songs.length} songs. Starting sync to Google Sheets (CANCIONES sheet)...`);

  for (const song of songs) {
    const payload = {
      type: "song",
      cancion: song.titulo_artista,
      creado_en: song.created_at || new Date().toISOString()
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      console.log(`[OK] (${songs.indexOf(song) + 1}/${songs.length}) Synced: ${song.titulo_artista}`);
    } catch (e) {
      console.error(`[ERROR] Failed to sync ${song.titulo_artista}:`, e.message);
    }
  }

  console.log("Music migration finished successfully!");
}

sync();
