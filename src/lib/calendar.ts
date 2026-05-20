import { siteConfig } from "../config/invitation";

export function getCalendarLinks() {
  // Junio 12, 2026 a las 7:00 PM Bolivia (UTC-4) → 23:00 UTC (12 Jun 23:00)
  // Junio 13, 2026 a las 3:00 AM Bolivia (UTC-4) → 07:00 UTC (13 Jun 07:00)
  const start = "20260612T230000Z";
  const end   = "20260613T070000Z";
  
  const title    = encodeURIComponent(`XV Años — ${siteConfig.client.name}`);
  const location = encodeURIComponent(siteConfig.location.address);
  const details  = encodeURIComponent(`¡Estás invitado/a a los XV años de ${siteConfig.client.name}! Hora: ${siteConfig.event.time}`);

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//XV Invitation//ES",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:XV Años — ${siteConfig.client.name}`,
    `LOCATION:${siteConfig.location.address}`,
    `DESCRIPTION:¡Estás invitado/a! A los XV Años de ${siteConfig.client.name} en ${siteConfig.location.venueName}. ¡Que no te lo cuenten! `,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  
  const icsUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;

  return { googleUrl, icsUrl };
}
