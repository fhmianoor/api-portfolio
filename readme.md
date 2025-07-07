## API Portfolio

### Endpoints

- `GET /api/about`
**status**: `200 OK`
**response**:
```json
{
  "status": "ok",
  "data": [
    {
      "id": 5,
      "name": "Muhamad Fahmi Aulia Noor",
      "title": "Backend Developer Junior",
      "bio": "Saya adalah seorang mahasiswa yang sedang menempuh pendidikan di Sekolah Tinggi Teknologi Cipasung. Saya memiliki minat yang besar dalam pengembangan perangkat lunak, khususnya dalam pengembangan backend. Saya berkomitmen untuk terus belajar dan mengembangkan keterampilan saya di bidang ini.",
      "address": "Kab.Tasikmalaya, Jawa Barat, Indonesia",
      "email": "fahmianoor12@gmail.com",
      "image": "http://localhost:8000/about/fahmi.jpg"
    }
  ]
}
```
- `GET /api/skills`
**status**: `200 OK`
**response**:
```json
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "category": "Backend",
      "items": "ExpressJS/NodeJS/Restful API"
    },
    {
      "id": 2,
      "category": "Frontend",
      "items": "HTML/CSS/JavaScript/ReactJS"
    },
    {
      "id": 3,
      "category": "Database",
      "items": "PostgreSQL"
    }
  ]
}
```
- `GET /api/socials`
**status**: `200 OK`
```json
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "github": "https://github.com/fahmianoor",
      "linkedin": "https://www.linkedin.com/in/fahmianoor/",
      "instagram": "https://www.instagram.com/fhmianoor/"
    }
  ]
}
```
- `GET /api/projects`
```json
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "title": "Project 1",
      "description": "Description of Project 1",
      "image": "http://localhost:8000/projects/project1.jpg"
    },
    {
      "id": 2,
      "title": "Project 2",
      "description": "Description of Project 2",
      "image": "http://localhost:8000/projects/project2.jpg"
    }
  ]
}
```
**status**: `200 OK`
- `GET /api/educations`
```json
{
  "status": "ok",
  "data": [
    {
      "id": 5,
      "school": "Sekolah Tinggi Teknologi Cipasung",
      "major": "Teknik Informatika",
      "degree": "Sarjana (S1)",
      "gpa": 3,
      "start": 2022,
      "end": 2026
    }
  ]
}
```
**status**: `200 OK`
- `GET /api/testimonials`
**status**: `200 OK`
- `GET /api/certificates`
```json
{
  "status": "ok",
  "data": [
    {
      "id": 1,
      "title": "Certificate 1",
      "issuer": "Institution 1",
      "year": 2020
    },
    {
      "id": 2,
      "title": "Certificate 2",
      "issuer": "Institution 2",
      "year": 2021
    }
  ]
}
**status**: `200 OK`
