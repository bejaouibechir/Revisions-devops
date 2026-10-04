// data.js
const PRESENTATION = {
 "title": "Git – Rappel",
 "chapters": [
  {
   "id": "ch-0",
   "title": "Introduction",
   "slideIds": [
    "s-0-0"
   ]
  },
  {
   "id": "ch-1",
   "title": "Configuration",
   "slideIds": [
    "s-1-0"
   ]
  },
  {
   "id": "ch-2",
   "title": "Premier projet",
   "slideIds": [
    "s-2-0",
    "s-2-1"
   ]
  },
  {
   "id": "ch-3",
   "title": "Historique",
   "slideIds": [
    "s-3-0",
    "s-3-1"
   ]
  },
  {
   "id": "ch-4",
   "title": "Annuler et corriger",
   "slideIds": [
    "s-4-0",
    "s-4-1",
    "s-4-2"
   ]
  },
  {
   "id": "ch-5",
   "title": "Branches",
   "slideIds": [
    "s-5-0",
    "s-5-1",
    "s-5-2",
    "s-5-3"
   ]
  },
  {
   "id": "ch-6",
   "title": "Tags",
   "slideIds": [
    "s-6-0"
   ]
  },
  {
   "id": "ch-7",
   "title": "GitFlow",
   "slideIds": [
    "s-7-0"
   ]
  },
  {
   "id": "ch-8",
   "title": "Récapitulatif",
   "slideIds": [
    "s-8-0"
   ]
  }
 ],
 "slides": [
  {
   "id": "s-0-0",
   "index": 0,
   "chapterId": "ch-0",
   "chapterTitle": "Introduction",
   "title": "Git en bref",
   "content": "<p><strong>Git</strong> est un système de gestion de versions <strong>distribué</strong> : chaque développeur possède une copie complète de l'historique du projet, contrairement à SVN qui est centralisé.</p>\n<h3>Les 3 zones de travail</h3>\n<table><thead><tr><th>Zone</th><th>Rôle</th><th>Commande pour y entrer</th></tr></thead><tbody><tr><td>Répertoire de travail</td><td>Vos fichiers en cours de modification</td><td>(édition)</td></tr><tr><td>Index (staging)</td><td>Ce qui sera inclus dans le prochain commit</td><td><code>git add</code></td></tr><tr><td>Dépôt local</td><td>Historique des commits</td><td><code>git commit</code></td></tr><tr><td>Dépôt distant</td><td>Copie partagée (GitLab, GitHub)</td><td><code>git push</code></td></tr></tbody></table>\n<h3>Au programme</h3>\n<ul><li>Configuration et premier projet</li><li>Consulter l'historique</li><li>Annuler et corriger</li><li>Branches, merge et rebase</li><li>Tags et modèle GitFlow</li></ul>",
   "refs": {}
  },
  {
   "id": "s-1-0",
   "index": 1,
   "chapterId": "ch-1",
   "chapterTitle": "Configuration",
   "title": "Paramètres globaux",
   "content": "<pre><code>git config --global user.name \"Bechir\"\ngit config --global user.email \"bechir@xyz.com\"\ngit config --list                              # vérifier la configuration\ngit config --global credential.helper cache    # mémoriser les identifiants\ngit config --global --edit                     # éditer le fichier de config</code></pre>\n<ul><li>La configuration globale se trouve dans <code>~/.gitconfig</code> (Windows : dossier de l'utilisateur) et <code>/etc/gitconfig</code> (Linux, niveau système)</li><li>Le nom et l'email apparaissent dans chacun de vos commits</li></ul>",
   "refs": {}
  },
  {
   "id": "s-2-0",
   "index": 2,
   "chapterId": "ch-2",
   "chapterTitle": "Premier projet",
   "title": "Cloner, ajouter, commiter, pousser",
   "content": "<pre><code>git clone https://gitlab.com/bechir-test-group/test001.git\ncd test001\n\ngit add main.py              # ajouter à l'index\ngit status                   # fichier ajouté mais pas encore commité\ngit commit -m \"Ajout de main.py\"\ngit push                     # envoyer vers le dépôt distant</code></pre>\n<ul><li>Le message du commit est libre, mais doit être <strong>explicite</strong></li><li>Avant <code>git push</code>, rien n'a changé côté distant : rafraîchissez la page GitLab après le push pour voir le résultat</li></ul>",
   "refs": {}
  },
  {
   "id": "s-2-1",
   "index": 3,
   "chapterId": "ch-2",
   "chapterTitle": "Premier projet",
   "title": "Synchroniser et conflits",
   "content": "<p>Si le dépôt distant a reçu des changements que vous n'avez pas en local, <code>git push</code> est <strong>refusé</strong>.</p>\n<pre><code>git pull       # récupère et fusionne les changements distants\ngit push       # puis on pousse</code></pre>\n<div class=\"note\">Si le même endroit d'un fichier a été modifié des deux côtés, Git signale un <strong>conflit</strong> : ouvrez le fichier, choisissez le bon contenu (supprimez les marqueurs <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>), puis <code>git add</code> et <code>git commit</code>.</div>",
   "refs": {}
  },
  {
   "id": "s-3-0",
   "index": 4,
   "chapterId": "ch-3",
   "chapterTitle": "Historique",
   "title": "Consulter les changements",
   "content": "<table><thead><tr><th>Commande</th><th>Rôle</th></tr></thead><tbody><tr><td><code>git log</code></td><td>Historique des commits</td></tr><tr><td><code>git log -p</code></td><td>Historique avec les modifications de chaque fichier</td></tr><tr><td><code>git log --oneline</code></td><td>Une ligne par commit (résumé)</td></tr><tr><td><code>git log --graph --oneline --all</code></td><td>Évolution de toutes les branches</td></tr><tr><td><code>git diff</code></td><td>Modifications non indexées</td></tr><tr><td><code>git diff --staged</code></td><td>Modifications indexées (prêtes à commiter)</td></tr><tr><td><code>git show 7060e</code></td><td>Détail d'un commit (début de son identifiant)</td></tr><tr><td><code>git show-ref</code></td><td>Position de HEAD et des branches</td></tr></tbody></table>\n<p>Dans <code>git diff</code>, les lignes en <code>-</code> sont des suppressions et celles en <code>+</code> des ajouts.</p>",
   "refs": {}
  },
  {
   "id": "s-3-1",
   "index": 5,
   "chapterId": "ch-3",
   "chapterTitle": "Historique",
   "title": "Ignorer des fichiers avec .gitignore",
   "content": "<p>Créez un fichier <code>.gitignore</code> à la racine, puis commitez-le.</p>\n<table><thead><tr><th>Règle</th><th>Signification</th></tr></thead><tbody><tr><td><code># texte</code></td><td>Commentaire</td></tr><tr><td><code>*.log</code></td><td><code>*</code> correspond à n'importe quelle suite de caractères</td></tr><tr><td><code>?</code></td><td>Un seul caractère</td></tr><tr><td><code>!important.log</code></td><td>Exception : ne pas ignorer ce fichier</td></tr><tr><td><code>dossier/</code></td><td>Ignorer un dossier</td></tr><tr><td><code>abc/**</code></td><td>Tout ce qui est dans <code>abc</code></td></tr><tr><td><code>**/file</code></td><td>Tout fichier ou dossier nommé <code>file</code>, à n'importe quel niveau</td></tr><tr><td><code>a/**/b</code></td><td>Correspond à <code>a/b</code>, <code>a/x/b</code>, <code>a/x/y/b</code>…</td></tr></tbody></table>\n<p>Utile pour exclure <code>node_modules/</code>, les fichiers <code>.env</code>, les logs et les binaires compilés.</p>",
   "refs": {}
  },
  {
   "id": "s-4-0",
   "index": 6,
   "chapterId": "ch-4",
   "chapterTitle": "Annuler et corriger",
   "title": "Annuler des modifications",
   "content": "<h3>Fichier modifié, pas encore indexé</h3>\n<pre><code>git checkout nom_fichier      # revient à la dernière version commitée</code></pre>\n<h3>Commits locaux : git reset</h3>\n<p><code>HEAD</code> est un pointeur vers le dernier commit de la branche courante. <code>HEAD~1</code> est le commit précédent.</p>\n<table><thead><tr><th>Commande</th><th>Effet</th></tr></thead><tbody><tr><td><code>git reset --soft HEAD~1</code></td><td>Annule le commit, <strong>garde</strong> les changements indexés</td></tr><tr><td><code>git reset --mixed HEAD~1</code> (défaut)</td><td>Annule le commit <strong>et</strong> l'index, garde les fichiers modifiés</td></tr><tr><td><code>git reset --hard HEAD~1</code></td><td>Annule tout, <strong>supprime</strong> les modifications des fichiers</td></tr></tbody></table>\n<div class=\"note\"><code>--hard</code> est destructif. À utiliser en connaissance de cause.</div>",
   "refs": {}
  },
  {
   "id": "s-4-1",
   "index": 7,
   "chapterId": "ch-4",
   "chapterTitle": "Annuler et corriger",
   "title": "Annuler un commit déjà poussé",
   "content": "<p>Pour un commit déjà envoyé au dépôt distant, on <strong>ne réécrit pas l'historique</strong> : on crée un commit inverse avec <code>git revert</code>.</p>\n<pre><code>git reflog                  # retrouver le hash du commit\ngit revert 1255b6910        # crée un commit qui annule celui-ci\ngit push</code></pre>\n<p>Si <code>git revert</code> échoue : <code>git cherry-pick --quit</code>, vérifier <code>git status</code>, obtenir un état propre, puis relancer <code>git revert</code>.</p>\n<h3>Récupérer un commit détruit</h3>\n<p>Un commit supprimé avec <code>--hard</code> n'est supprimé définitivement qu'après environ 90 jours.</p>\n<pre><code>git reflog                                   # journal des déplacements de HEAD\ngit checkout -b NouvelleBranche &lt;hash&gt;       # restaure le commit dans une branche</code></pre>",
   "refs": {}
  },
  {
   "id": "s-4-2",
   "index": 8,
   "chapterId": "ch-4",
   "chapterTitle": "Annuler et corriger",
   "title": "Amend et stash",
   "content": "<h3>Modifier le dernier commit</h3>\n<pre><code>git commit --amend -m \"Nouveau message\"   # change le message\ngit commit --amend --no-edit              # ajoute des fichiers, garde le message</code></pre>\n<h3>Stash : mettre ses modifications de côté</h3>\n<pre><code>git stash                      # range les changements dans un « brouillon »\ngit stash -m \"description\"     # avec un titre\ngit stash list                 # lister les brouillons\ngit stash apply 0              # réappliquer le brouillon n°0\ngit stash pop                  # réappliquer et supprimer de la pile\ngit stash drop 0               # supprimer le brouillon n°0</code></pre>\n<p>Pratique pour changer de branche sans commiter un travail inachevé.</p>",
   "refs": {}
  },
  {
   "id": "s-5-0",
   "index": 9,
   "chapterId": "ch-5",
   "chapterTitle": "Branches",
   "title": "Les bases",
   "content": "<table><thead><tr><th>Besoin</th><th>Commande</th></tr></thead><tbody><tr><td>Lister les branches</td><td><code>git branch</code></td></tr><tr><td>Branche courante</td><td><code>git branch --show-current</code></td></tr><tr><td>Créer une branche</td><td><code>git branch ma-branche</code></td></tr><tr><td>Créer et basculer</td><td><code>git checkout -b ma-branche</code></td></tr><tr><td>Basculer sur une branche</td><td><code>git checkout ma-branche</code></td></tr><tr><td>Supprimer une branche</td><td><code>git branch -d ma-branche</code></td></tr><tr><td>Fusionner</td><td><code>git merge ma-branche</code> (depuis la branche <strong>qui reçoit</strong>)</td></tr><tr><td>Abandonner une fusion</td><td><code>git merge --abort</code></td></tr></tbody></table>\n<p>Les versions récentes de Git proposent aussi <code>git switch</code> à la place de <code>git checkout</code> pour changer de branche.</p>",
   "refs": {}
  },
  {
   "id": "s-5-1",
   "index": 10,
   "chapterId": "ch-5",
   "chapterTitle": "Branches",
   "title": "Dépôts distants",
   "content": "<pre><code>git remote add origin https://repo_here   # lier un dépôt distant\ngit remote -v                             # lister les dépôts distants\ngit remote show origin                    # détails\ngit fetch                                 # récupérer sans fusionner\ngit merge origin/main                     # fusionner la branche distante\ngit pull                                  # fetch + merge en une commande\n\ngit push -u origin ma-branche             # publier une branche\ngit push --delete origin ma-branche       # supprimer une branche distante</code></pre>",
   "refs": {}
  },
  {
   "id": "s-5-2",
   "index": 11,
   "chapterId": "ch-5",
   "chapterTitle": "Branches",
   "title": "Merge ou rebase",
   "content": "<p>Deux façons d'intégrer les changements d'une branche dans une autre.</p>\n<table><thead><tr><th></th><th>Merge</th><th>Rebase</th></tr></thead><tbody><tr><td>Principe</td><td>Crée un commit de fusion qui réunit les deux historiques</td><td>Rejoue vos commits <strong>à la suite</strong> de l'autre branche</td></tr><tr><td>Historique</td><td>Fidèle, avec des embranchements</td><td>Linéaire et propre</td></tr><tr><td>Commande</td><td><code>git merge branche</code></td><td><code>git rebase branche</code></td></tr><tr><td>Annuler</td><td><code>git merge --abort</code></td><td><code>git rebase --abort</code></td></tr></tbody></table>\n<div class=\"note\">Règle d'or : ne faites <strong>jamais de rebase</strong> sur des commits déjà partagés avec d'autres personnes.</div>\n<p>En cas de conflit, résolvez-les à la main ou avec un outil comme <strong>Meld</strong> ou <strong>DiffMerge</strong> (vérifier avec <code>git config --global --list</code>).</p>",
   "refs": {}
  },
  {
   "id": "s-5-3",
   "index": 12,
   "chapterId": "ch-5",
   "chapterTitle": "Branches",
   "title": "Branches protégées (GitLab)",
   "content": "<p>Une branche protégée (comme <code>main</code>) contrôle :</p>\n<ul><li><strong>Qui peut fusionner</strong> dans la branche</li><li><strong>Qui peut pousser</strong> vers la branche</li><li><strong>Si le force push</strong> est autorisé</li><li><strong>Qui peut déprotéger</strong> la branche</li></ul>\n<p>Configuration : *Paramètres &gt; Dépôt &gt; Branches protégées*, puis choisir la branche et les rôles autorisés pour la fusion et le push.</p>",
   "refs": {}
  },
  {
   "id": "s-6-0",
   "index": 13,
   "chapterId": "ch-6",
   "chapterTitle": "Tags",
   "title": "Marquer des versions",
   "content": "<p>Un <strong>tag</strong> est un point de repère stable dans l'historique, typiquement une version.</p>\n<table><thead><tr><th>Type</th><th>Usage</th></tr></thead><tbody><tr><td><strong>Annoté</strong> (<code>-a</code>)</td><td>Contient des métadonnées (auteur, date, message) : recommandé pour les versions publiées</td></tr><tr><td><strong>Léger</strong></td><td>Simple pointeur vers un commit</td></tr></tbody></table>\n<pre><code>git tag -a v1.0 -m \"Version 1.0\"      # tag annoté\ngit tag v1.0-beta &lt;sha-du-commit&gt;     # tag léger\ngit tag                               # lister\ngit tag -l \"v1.*\"                     # rechercher (* = joker)\ngit ls-remote --tags origin           # tags distants\n\ngit push origin v1.0                  # pousser un tag\ngit push origin --tags                # pousser tous les tags\n\ngit tag -d v1.0                       # supprimer en local\ngit push origin --delete v1.0         # supprimer en distant</code></pre>\n<p><code>git checkout v1.0</code> place en mode <strong>HEAD détaché</strong> : on peut consulter le code sans modifier une branche.</p>",
   "refs": {}
  },
  {
   "id": "s-7-0",
   "index": 14,
   "chapterId": "ch-7",
   "chapterTitle": "GitFlow",
   "title": "Le modèle GitFlow",
   "content": "<p>GitFlow organise les branches d'un projet pour éviter les conflits lors des fusions.</p>\n<table><thead><tr><th>Branche</th><th>Rôle</th></tr></thead><tbody><tr><td><code>main</code></td><td>Production uniquement. On n'y touche qu'à la livraison ou pour un bug sévère</td></tr><tr><td><code>develop</code></td><td>Dérivée de <code>main</code>, c'est la base de l'intégration</td></tr><tr><td><code>feature/*</code></td><td>Nouvelle fonctionnalité, créée depuis <code>develop</code> et fusionnée dans <code>develop</code></td></tr><tr><td><code>release/*</code></td><td>Préparation d'une version, fusionnée dans <code>main</code> et <code>develop</code>, puis taguée</td></tr><tr><td><code>hotfix/*</code></td><td>Correction urgente en production, créée depuis <code>main</code></td></tr></tbody></table>\n<p>Chaque livraison sur <code>main</code> reçoit un <strong>tag</strong> de version (0.1, 0.2, 1.0…). GitFlow s'applique à la main ou avec l'extension <code>git flow</code>.</p>",
   "refs": {}
  },
  {
   "id": "s-8-0",
   "index": 15,
   "chapterId": "ch-8",
   "chapterTitle": "Récapitulatif",
   "title": "À retenir",
   "content": "<ul><li>Cycle de base : <code>git add</code> puis <code>git commit</code> puis <code>git push</code>, et <code>git pull</code> pour se synchroniser</li><li><code>git log</code>, <code>git diff</code>, <code>git show</code> pour comprendre l'historique</li><li><code>reset</code> pour le local, <code>revert</code> pour ce qui est déjà poussé, <code>reflog</code> pour tout récupérer</li><li><code>stash</code> pour mettre de côté, <code>amend</code> pour corriger le dernier commit</li><li>Une branche par fonctionnalité ; merge pour garder l'historique, rebase pour le nettoyer</li><li>Protéger <code>main</code>, taguer les versions, suivre GitFlow</li></ul>",
   "refs": {}
  }
 ]
};
