# SOMIMI — Maquette 1 · Institutionnelle & Corporate

Site vitrine **autonome** de la Société Minière de Mitwaba — SOMIMI SARL.  
Ce dépôt ne contient que cette direction artistique (navy, ivoire, bronze, Fraunces). Il n’est pas un sous-dossier d’un autre projet.

## Lancer en local

```bash
cd somimi-maquette-1-institutionnelle
python3 -m http.server 8080
```

Ouvrir [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Direction artistique

- Palette : navy `#0B1F3A`, pétrole `#163A5F`, ivoire `#F6F3EC`, bronze `#B08D57`
- Typographie : Fraunces (titres) + Source Sans 3 (corps)
- Structure : header classique, hero plein écran, sections empilées, footer juridique (RCCM, ID nationale)

## Stack

HTML5 + Tailwind CDN + JavaScript vanilla. Pas de build. Prêt pour GitHub Pages.

## GitHub Pages

```bash
git init -b main
git add .
git commit -m "Site vitrine SOMIMI — maquette institutionnelle"
gh repo create somimi-maquette-1-institutionnelle --public --source=. --remote=origin --push
```

Puis **Settings → Pages** : GitHub Actions, ou branche `main` / `/ (root)`.

URL typique : `https://<compte>.github.io/somimi-maquette-1-institutionnelle/`

## Roadmap technique

L’architecture front-end est découplée, sans logique métier. Elle pourra évoluer vers :

- un espace utilisateurs / comptes ;
- une GED avancée et multilingue ;
- un module fournisseurs / achats ;
- une intégration progressive Odoo (achats, projets, CRM, RH, reporting).

Ces fonctions ne sont **pas** développées ici.
