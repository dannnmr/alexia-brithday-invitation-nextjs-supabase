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
  console.log("Fetching guests from Supabase...");
  const { data: guests, error } = await supabase.from('invitados').select('*');
  
  if (error) {
    console.error("Error fetching guests:", error);
    return;
  }

  if (!guests || guests.length === 0) {
    console.log("No guests found to sync.");
    return;
  }

  console.log(`Found ${guests.length} guests. Starting sync to Google Sheets...`);

  for (const guest of guests) {
    const payload = {
      type: "guest",
      nombre: guest.nombre,
      creado_en: guest.creado_en || new Date().toISOString()
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      console.log(`[OK] (${guests.indexOf(guest) + 1}/${guests.length}) Synced: ${guest.nombre}`);
    } catch (e) {
      console.error(`[ERROR] Failed to sync ${guest.nombre}:`, e.message);
    }
  }

  console.log("Guest migration finished successfully!");
}

sync();
