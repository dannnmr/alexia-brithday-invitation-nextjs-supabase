import { createClient } from '@supabase/supabase-js';

// Credentials fetched from .env.local
const supabaseUrl = "https://qeokptfonzdgpzlsiydh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlb2twdGZvbnpkZ3B6bHNpeWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTQ5NjYsImV4cCI6MjA5NDczMDk2Nn0.wwkZoHXyHDQTKmvNRGmre1z13__FUP8HBJerBGAE0FM";
const webhookUrl = "https://script.google.com/macros/s/AKfycbzQTqfTwaHMbbNasswGecuqDyk3XKnSz0qRl7YAHYz_FyydWJj8vLRcZzVTLZ_Xu9F9/exec";



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
