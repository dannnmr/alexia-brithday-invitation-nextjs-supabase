import { createClient } from '@supabase/supabase-js';

// Credentials fetched from .env.local
const supabaseUrl = "https://qeokptfonzdgpzlsiydh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlb2twdGZvbnpkZ3B6bHNpeWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTQ5NjYsImV4cCI6MjA5NDczMDk2Nn0.wwkZoHXyHDQTKmvNRGmre1z13__FUP8HBJerBGAE0FM";
const webhookUrl = "https://script.google.com/macros/s/AKfycbzQTqfTwaHMbbNasswGecuqDyk3XKnSz0qRl7YAHYz_FyydWJj8vLRcZzVTLZ_Xu9F9/exec";

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
