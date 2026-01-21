# Cum să adaugi videoclipuri în portofoliu

Site-ul tău Prime Frame este configurat pentru a folosi URL-uri directe către videoclipuri. Iată cum să procedezi:

## Pași pentru a adăuga videoclipuri:

### 1. Încarcă videoclipurile undeva online

Alege una dintre aceste opțiuni:

**Opțiunea A: YouTube (Recomandat)**
- Încarcă videoclipul pe YouTube
- Setează-l ca "Unlisted" dacă nu vrei să fie public
- Copiază URL-ul (ex: `https://www.youtube.com/watch?v=...`)
- Pentru embed: Click dreapta pe video → "Copy embed code" sau folosește URL-ul direct

**Opțiunea B: Google Drive**
- Încarcă videoclipul pe Google Drive
- Click dreapta → "Get link"
- Setează permisiunile la "Anyone with the link can view"
- Copiază link-ul

**Opțiunea C: Dropbox**
- Încarcă pe Dropbox
- Click pe "Share" → "Create link"
- Schimbă `?dl=0` cu `?raw=1` la finalul URL-ului pentru link direct

**Opțiunea D: Vimeo**
- Încarcă pe Vimeo
- Copiază link-ul video

### 2. Adaugă URL-ul în cod

Deschide fișierul `components/work-section.tsx` și găsește array-ul `workProjects`.

Pentru fiecare proiect, înlocuiește `videoUrl: ""` cu URL-ul tău:

\`\`\`typescript
{
  id: 1,
  title: "Lansare Cazinou Cripto",
  category: "iGaming",
  tags: ["Reclame Video", "Variante A/B", "Stil UGC"],
  imagePlaceholder: "Campanie Publicitate Cazinou",
  videoUrl: "https://www.youtube.com/watch?v=...", // Adaugă URL-ul aici
  description: "...",
}
\`\`\`

### 3. Exemple de URL-uri valide:

- YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Google Drive: `https://drive.google.com/file/d/.../.../view?usp=sharing`
- Dropbox: `https://www.dropbox.com/s/.../video.mp4?raw=1`
- Vimeo: `https://vimeo.com/123456789`
- Link direct: `https://example.com/video.mp4`

### 4. Salvează și testează

După ce adaugi URL-urile, salvează fișierul și verifică că videoclipurile se afișează corect în modalul fiecărui proiect.

## Note importante:

- Pentru fișiere mari (100MB+), YouTube sau Vimeo sunt cele mai bune opțiuni
- Asigură-te că linkurile sunt publice sau "anyone with the link"
- Pentru Google Drive, dacă videoclipul nu se încarcă, încearcă să folosești un link direct sau să-l muți pe alt serviciu
- Videoclipurile se vor reda direct în modal când dai click pe un proiect

## Suport:

Dacă întâmpini probleme cu afișarea videoclipurilor, verifică:
1. URL-ul este corect și accesibil public
2. Browser-ul suportă formatul video
3. Nu există restricții CORS pe serviciul de hosting
