// data.js
const PRESENTATION = {
 "title": "Linux pour DevOps",
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
   "title": "Commandes de base",
   "slideIds": [
    "s-1-0",
    "s-1-1",
    "s-1-2"
   ]
  },
  {
   "id": "ch-2",
   "title": "Système de fichiers",
   "slideIds": [
    "s-2-0",
    "s-2-1"
   ]
  },
  {
   "id": "ch-3",
   "title": "Éditeurs et environnement",
   "slideIds": [
    "s-3-0",
    "s-3-1",
    "s-3-2"
   ]
  },
  {
   "id": "ch-4",
   "title": "Utilisateurs et permissions",
   "slideIds": [
    "s-4-0",
    "s-4-1",
    "s-4-2"
   ]
  },
  {
   "id": "ch-5",
   "title": "Scripting Bash",
   "slideIds": [
    "s-5-0",
    "s-5-1",
    "s-5-2",
    "s-5-3",
    "s-5-4",
    "s-5-5",
    "s-5-6"
   ]
  },
  {
   "id": "ch-6",
   "title": "Processus",
   "slideIds": [
    "s-6-0",
    "s-6-1"
   ]
  },
  {
   "id": "ch-7",
   "title": "CRON",
   "slideIds": [
    "s-7-0"
   ]
  },
  {
   "id": "ch-8",
   "title": "Services",
   "slideIds": [
    "s-8-0",
    "s-8-1",
    "s-8-2",
    "s-8-3"
   ]
  },
  {
   "id": "ch-9",
   "title": "Récapitulatif",
   "slideIds": [
    "s-9-0"
   ]
  }
 ],
 "slides": [
  {
   "id": "s-0-0",
   "index": 0,
   "chapterId": "ch-0",
   "chapterTitle": "Introduction",
   "title": "Linux pour DevOps",
   "content": "<p>Linux est le système d'exploitation de référence des serveurs, du cloud et des conteneurs. Un DevOps passe l'essentiel de son temps dans un terminal Linux.</p>\n<h3>Au programme</h3>\n<ul><li><strong>Commandes de base</strong> : naviguer, créer, copier, lire des fichiers</li><li><strong>Système de fichiers</strong> : où se trouve quoi</li><li><strong>Utilisateurs, groupes et permissions</strong></li><li><strong>Éditeurs, bashrc, sudo et SSH</strong></li><li><strong>Scripting Bash</strong></li><li><strong>Processus, CRON et services</strong></li></ul>\n<div class=\"note\">Astuce : tapez <code>man &lt;commande&gt;</code> pour lire l'aide de n'importe quelle commande.</div>",
   "refs": {}
  },
  {
   "id": "s-1-0",
   "index": 1,
   "chapterId": "ch-1",
   "chapterTitle": "Commandes de base",
   "title": "Gérer les dossiers",
   "content": "<table><thead><tr><th>Commande</th><th>Rôle</th></tr></thead><tbody><tr><td><code>pwd</code></td><td>Afficher le répertoire courant</td></tr><tr><td><code>cd &lt;dossier&gt;</code></td><td>Changer de dossier</td></tr><tr><td><code>cd ~</code> / <code>cd -</code> / <code>cd ..</code></td><td>Aller au home / au dossier précédent / au parent</td></tr><tr><td><code>mkdir -p a/b/c</code></td><td>Créer des dossiers imbriqués</td></tr><tr><td><code>rmdir</code></td><td>Supprimer un dossier vide</td></tr><tr><td><code>rm -rf &lt;dossier&gt;</code></td><td>Supprimer un dossier non vide (<strong>sans confirmation, à manier avec précaution</strong>)</td></tr><tr><td><code>cp -r</code></td><td>Copier un dossier récursivement</td></tr><tr><td><code>mv</code></td><td>Déplacer ou renommer</td></tr></tbody></table>\n<h3>Historique</h3>\n<ul><li><code>history</code> : liste des commandes passées</li><li><code>!!</code> : relancer la commande précédente</li><li>Ajouter dans <code>~/.bashrc</code> : <code>export HISTTIMEFORMAT=\"%Y-%m-%d %T \"</code> pour horodater l'historique</li></ul>",
   "refs": {}
  },
  {
   "id": "s-1-1",
   "index": 2,
   "chapterId": "ch-1",
   "chapterTitle": "Commandes de base",
   "title": "Gérer les fichiers",
   "content": "<table><thead><tr><th>Commande</th><th>Rôle</th></tr></thead><tbody><tr><td><code>touch f</code></td><td>Créer un fichier vide</td></tr><tr><td><code>cat f</code></td><td>Afficher le contenu</td></tr><tr><td><code>head f</code> / <code>tail f</code></td><td>Premières / dernières lignes</td></tr><tr><td><code>tail -f f</code></td><td>Suivre un fichier en temps réel (idéal pour les logs)</td></tr><tr><td><code>diff f1 f2</code></td><td>Comparer deux fichiers (contenu)</td></tr><tr><td><code>truncate -s 0 f</code></td><td>Vider un fichier</td></tr><tr><td><code>zip</code> / <code>unzip</code></td><td>Compresser / décompresser en zip</td></tr><tr><td><code>tar -cvf a.tar dossier</code></td><td>Archiver</td></tr><tr><td><code>tar -xvf a.tar</code></td><td>Extraire</td></tr><tr><td><code>wget &lt;url&gt;</code></td><td>Télécharger un fichier</td></tr><tr><td><code>whereis &lt;cmd&gt;</code></td><td>Localiser une commande</td></tr></tbody></table>",
   "refs": {}
  },
  {
   "id": "s-1-2",
   "index": 3,
   "chapterId": "ch-1",
   "chapterTitle": "Commandes de base",
   "title": "La commande ls",
   "content": "<pre><code>ls -l    # liste détaillée avec les droits\nls -a    # inclut les fichiers cachés (commençant par .)\nls -s    # affiche les tailles allouées</code></pre>\n<p>Exemple de sortie de <code>ls -l</code> :</p>\n<pre><code>-rwxr-xr--  1  bechir  devops  4096  Jan 10 12:00  script.sh</code></pre>\n<ul><li><code>-</code> : type (<code>-</code> fichier, <code>d</code> dossier, <code>l</code> lien symbolique)</li><li><code>rwxr-xr--</code> : droits (propriétaire, groupe, autres)</li><li><code>1</code> : nombre de liens physiques</li><li><code>bechir</code> / <code>devops</code> : propriétaire / groupe</li><li><code>4096</code> : taille, puis date de modification et nom</li></ul>",
   "refs": {}
  },
  {
   "id": "s-2-0",
   "index": 4,
   "chapterId": "ch-2",
   "chapterTitle": "Système de fichiers",
   "title": "Types de fichiers",
   "content": "<p>Sous Linux, <strong>tout est fichier</strong>.</p>\n<table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>Fichiers généraux</td><td>Texte, image, script, binaire…</td></tr><tr><td>Répertoires</td><td>Conteneurs d'autres fichiers</td></tr><tr><td>Fichiers système</td><td>Nécessaires au fonctionnement de l'OS</td></tr><tr><td>Fichiers de périphérique</td><td>Disques et clés USB représentés par des fichiers (<code>/dev/sda1</code>)</td></tr></tbody></table>\n<h3>Bonnes pratiques de nommage</h3>\n<ul><li>Linux est <strong>sensible à la casse</strong> : <code>Folder1</code> et <code>folder1</code> sont différents</li><li>Un nom commençant par un point (<code>.folder</code>) est <strong>caché</strong></li><li>Éviter les espaces et limiter les caractères spéciaux aux tirets <code>-</code> et <code>_</code></li></ul>\n<h3>Commandes utiles</h3>\n<pre><code>cat /proc/filesystems   # systèmes de fichiers supportés\nfindmnt                 # lister les points de montage\nlsblk                   # lister les disques et volumes</code></pre>",
   "refs": {}
  },
  {
   "id": "s-2-1",
   "index": 5,
   "chapterId": "ch-2",
   "chapterTitle": "Système de fichiers",
   "title": "Arborescence (FHS)",
   "content": "<p>Linux utilise des systèmes de fichiers de type <strong>EXT</strong> (et non NTFS). Tout part de la racine <code>/</code>.</p>\n<table><thead><tr><th>Dossier</th><th>Contenu</th></tr></thead><tbody><tr><td><code>/</code></td><td>Racine de l'arborescence</td></tr><tr><td><code>/bin</code>, <code>/sbin</code></td><td>Programmes essentiels (utilisateur / administration)</td></tr><tr><td><code>/usr/bin</code>, <code>/usr/sbin</code></td><td>Programmes installés par la distribution</td></tr><tr><td><code>/usr/local/bin</code></td><td>Programmes installés manuellement</td></tr><tr><td><code>/etc</code></td><td><strong>Fichiers de configuration</strong></td></tr><tr><td><code>/home</code></td><td>Dossiers personnels des utilisateurs (dont <code>.ssh</code>)</td></tr><tr><td><code>/var/log</code></td><td><strong>Journaux</strong> système et applicatifs</td></tr><tr><td><code>/var/lib</code></td><td>Bases de données et paquets</td></tr><tr><td><code>/opt</code></td><td>Logiciels tiers (Tomcat…)</td></tr><tr><td><code>/tmp</code></td><td>Fichiers temporaires (effacés au redémarrage)</td></tr><tr><td><code>/mnt</code>, <code>/media</code></td><td>Points de montage</td></tr><tr><td><code>/dev</code></td><td>Fichiers de périphériques</td></tr><tr><td><code>/sys</code>, <code>/proc</code></td><td>Systèmes de fichiers virtuels (noyau, processus)</td></tr><tr><td><code>/srv</code></td><td>Données des services du serveur</td></tr></tbody></table>",
   "refs": {}
  },
  {
   "id": "s-3-0",
   "index": 6,
   "chapterId": "ch-3",
   "chapterTitle": "Éditeurs et environnement",
   "title": "Éditeurs : Vim et Nano",
   "content": "<h3>Nano (le plus simple)</h3>\n<table><thead><tr><th>Raccourci</th><th>Action</th></tr></thead><tbody><tr><td><code>Ctrl + O</code></td><td>Enregistrer (puis Entrée)</td></tr><tr><td><code>Ctrl + X</code></td><td>Quitter</td></tr><tr><td><code>Ctrl + W</code></td><td>Chercher</td></tr><tr><td><code>Ctrl + K</code> / <code>Ctrl + U</code></td><td>Couper / Coller</td></tr><tr><td><code>Alt + R</code></td><td>Remplacer</td></tr></tbody></table>\n<h3>Vim (commandes utiles en mode <code>:</code>)</h3>\n<pre><code>:set number             # numéroter les lignes\n:s/ancien/nouveau/      # remplacer sur la ligne courante\n:%s/ancien/nouveau/g    # remplacer partout\n:set mouse=a            # activer la souris\n:wq   /   :q!           # enregistrer et quitter / quitter sans enregistrer</code></pre>",
   "refs": {}
  },
  {
   "id": "s-3-1",
   "index": 7,
   "chapterId": "ch-3",
   "chapterTitle": "Éditeurs et environnement",
   "title": "bashrc et bash_profile",
   "content": "<p>Le fichier <strong><code>~/.bashrc</code></strong> est exécuté à chaque ouverture d'un terminal interactif : il sert à personnaliser son environnement.</p>\n<ul><li><strong><code>~/.bashrc</code></strong> : alias, fonctions, prompt, variables. Lu à chaque nouveau terminal</li><li><strong><code>~/.bash_profile</code></strong> : variable <code>PATH</code> et commandes à exécuter une seule fois à l'ouverture de session</li></ul>\n<h3>Exemples (à ajouter dans <code>~/.bashrc</code>)</h3>\n<pre><code>alias ll='ls -l'                              # alias\nexport PATH=$PATH:$HOME/mes-scripts           # ajouter un dossier au PATH\nexport PS1='\\u@\\h \\D{%F %T} \\w\\$ '            # prompt personnalisé</code></pre>\n<p>Recharger sans rouvrir le terminal : <code>source ~/.bashrc</code></p>\n<div class=\"note\">Avec <code>export</code> seul, la modification du <code>PATH</code> disparaît à la fermeture de la session. Pour la rendre permanente, il faut l'écrire dans <code>~/.bashrc</code>. Une fois le dossier dans le <code>PATH</code>, on lance <code>test.sh</code> au lieu de <code>./test.sh</code>.</div>",
   "refs": {}
  },
  {
   "id": "s-3-2",
   "index": 8,
   "chapterId": "ch-3",
   "chapterTitle": "Éditeurs et environnement",
   "title": "Sudo et SSH",
   "content": "<h3>Sudo</h3>\n<p>Certaines actions (installer, mettre à jour) demandent les droits administrateur.</p>\n<pre><code>sudo visudo                    # édite /etc/sudoers\nsudo -l                        # vérifier ses droits sudo\nsudo usermod -aG sudo visiteur # ubuntu : groupe \"sudo\" (CentOS : \"wheel\")</code></pre>\n<p>Règle type dans <code>/etc/sudoers</code> : <code>root ALL=(ALL:ALL) ALL</code> = <strong>utilisateur</strong> <code>ALL</code> hôtes <code>(ALL</code> utilisateurs <code>:ALL</code> groupes<code>)</code> <code>ALL</code> commandes.</p>\n<h3>SSH : connexion à distance par clé</h3>\n<pre><code>ssh-keygen -t rsa                 # génère la paire de clés\nssh-copy-id utilisateur@IP        # copie la clé publique sur le serveur\nssh utilisateur@IP                # connexion sans mot de passe</code></pre>\n<p>La clé publique est stockée sur le serveur dans <code>~/.ssh/authorized_keys</code>.</p>",
   "refs": {}
  },
  {
   "id": "s-4-0",
   "index": 9,
   "chapterId": "ch-4",
   "chapterTitle": "Utilisateurs et permissions",
   "title": "Utilisateurs et groupes",
   "content": "<ul><li><code>/etc/passwd</code> : liste des utilisateurs</li><li><code>/etc/group</code> : liste des groupes</li></ul>\n<h3>Utilisateurs</h3>\n<pre><code>sudo useradd -m visiteur           # crée l'utilisateur avec son home\nsudo adduser visiteur              # idem, version interactive\npasswd visiteur                    # définir le mot de passe\nid visiteur                        # afficher UID et groupes\nuseradd -g users -G mail visiteur  # groupe principal + groupes secondaires\nuseradd -s /bin/bash visiteur      # définir le shell\nsudo userdel -r visiteur           # supprimer (avec son home)</code></pre>\n<h3>Groupes</h3>\n<pre><code>groupadd visiteurs                 # créer\ngroupmod -n invites visiteurs      # renommer\ngroupdel invites                   # supprimer\nusermod -aG sudo visiteur          # ajouter un utilisateur à un groupe\ngpasswd -d visiteur sudo           # le retirer d'un groupe</code></pre>",
   "refs": {}
  },
  {
   "id": "s-4-1",
   "index": 10,
   "chapterId": "ch-4",
   "chapterTitle": "Utilisateurs et permissions",
   "title": "Les permissions",
   "content": "<p>Trois actions : <strong>lire (r)</strong>, <strong>écrire (w)</strong>, <strong>exécuter (x)</strong>, pour trois catégories : <strong>u</strong> (propriétaire), <strong>g</strong> (groupe), <strong>o</strong> (autres).</p>\n<table><thead><tr><th>Valeur</th><th>Droits</th><th>Symbole</th></tr></thead><tbody><tr><td>0</td><td>Aucun</td><td><code>---</code></td></tr><tr><td>1</td><td>Exécuter</td><td><code>--x</code></td></tr><tr><td>2</td><td>Écrire</td><td><code>-w-</code></td></tr><tr><td>4</td><td>Lire</td><td><code>r--</code></td></tr><tr><td>5</td><td>Lire + exécuter</td><td><code>r-x</code></td></tr><tr><td>6</td><td>Lire + écrire</td><td><code>rw-</code></td></tr><tr><td>7</td><td>Tous les droits</td><td><code>rwx</code></td></tr></tbody></table>\n<p>Le chiffre est la <strong>somme</strong> : r=4, w=2, x=1. Ainsi <code>chmod 754 f</code> donne <code>rwx</code> au propriétaire, <code>r-x</code> au groupe et <code>r--</code> aux autres.</p>",
   "refs": {}
  },
  {
   "id": "s-4-2",
   "index": 11,
   "chapterId": "ch-4",
   "chapterTitle": "Utilisateurs et permissions",
   "title": "chmod, chown, chgrp",
   "content": "<h3>chmod : modifier les droits</h3>\n<pre><code>chmod u+x script.sh            # ajouter l'exécution au propriétaire\nchmod g-w fichier              # retirer l'écriture au groupe\nchmod u=rwx,g=rx,o= fichier    # définir précisément\nchmod 774 fichier              # notation numérique</code></pre>\n<h3>chown / chgrp : modifier le propriétaire</h3>\n<pre><code>chown visiteur fichier1             # change l'utilisateur propriétaire\nchown visiteur:visiteurs fichier1   # utilisateur et groupe\nchown :visiteurs fichier1           # groupe seulement\nsudo chgrp -R admins /test          # change le groupe (récursif)</code></pre>\n<ul><li>Options <code>-v</code> / <code>-c</code> pour afficher les changements</li><li><code>getfacl &lt;fichier&gt;</code> affiche les ACL (installer avec <code>sudo apt install acl</code>)</li></ul>",
   "refs": {}
  },
  {
   "id": "s-5-0",
   "index": 12,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Premier script",
   "content": "<p>Un script Bash commence par un <strong>shebang</strong> : <code>#!/bin/bash</code>. Les équivalents Linux des fichiers <code>.bat</code> sont les scripts <code>.sh</code> (il n'existe pas de notion d'« exécutable » par extension).</p>\n<pre><code>#!/bin/bash\necho \"Aujourd'hui : $(date)\"\necho \"Entrez un chemin :\"\nread chemin\nls $chemin</code></pre>\n<pre><code>chmod u+x run_all.sh     # rendre exécutable\n./run_all.sh             # exécuter</code></pre>\n<ul><li><code>which bash</code> : localiser l'interpréteur</li><li><code>cat /etc/shells</code> : lister les shells disponibles, <code>chsh</code> pour en changer</li><li><code>ps -p $$</code> : connaître le shell courant</li></ul>",
   "refs": {}
  },
  {
   "id": "s-5-1",
   "index": 13,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Variables",
   "content": "<pre><code>nom=\"Bechir\"          # pas d'espace autour du =\necho $nom             # lire la valeur avec $\nread x                # saisie utilisateur\n\ndeclare -i n=5        # variable entière\ndeclare -r PI=3       # lecture seule\nz=$(( n + 2 ))        # calcul\n\nexport nom            # visible aussi dans les sous-processus</code></pre>\n<ul><li>Une variable n'est visible que dans son processus, sauf si elle est <strong>exportée</strong></li><li>Bash ne gère <strong>pas les nombres décimaux</strong> par défaut</li><li><code>set | more</code> liste toutes les variables</li></ul>",
   "refs": {}
  },
  {
   "id": "s-5-2",
   "index": 14,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Conditions",
   "content": "<pre><code>#!/bin/bash\nread -p \"Un nombre : \" n\nif [ $n -gt 200 ]; then\n  echo \"Supérieur à 200\"\nelif [ $n -gt 100 ]; then\n  echo \"Entre 100 et 200\"\nelse\n  echo \"Inférieur ou égal à 100\"\nfi</code></pre>\n<div class=\"note\">Ne pas oublier le <code>;</code> avant <code>then</code> quand il est sur la même ligne, et fermer avec <code>fi</code>.</div>\n<h3>Case</h3>\n<pre><code>case $couleur in\n  rouge) echo \"Rouge\" ;;\n  vert)  echo \"Vert\" ;;\n  *)     echo \"Autre\" ;;\nesac</code></pre>",
   "refs": {}
  },
  {
   "id": "s-5-3",
   "index": 15,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Opérateurs de test",
   "content": "<table><thead><tr><th>Nombres</th><th>Sens</th><th>Chaînes</th><th>Sens</th></tr></thead><tbody><tr><td><code>-eq</code></td><td>égal</td><td><code>=</code></td><td>égales</td></tr><tr><td><code>-ne</code></td><td>différent</td><td><code>!=</code></td><td>différentes</td></tr><tr><td><code>-gt</code> / <code>-ge</code></td><td>&gt; / ≥</td><td><code>-z</code></td><td>chaîne vide</td></tr><tr><td><code>-lt</code> / <code>-le</code></td><td>&lt; / ≤</td><td><code>-n</code></td><td>chaîne non vide</td></tr></tbody></table>\n<table><thead><tr><th>Fichiers</th><th>Vrai si…</th><th>Logique</th><th>Sens</th></tr></thead><tbody><tr><td><code>-e</code></td><td>existe</td><td><code>&amp;&amp;</code> ou <code>-a</code></td><td>ET</td></tr><tr><td><code>-f</code></td><td>fichier régulier</td><td><code>||</code> ou <code>-o</code></td><td>OU</td></tr><tr><td><code>-d</code></td><td>dossier</td><td><code>!</code></td><td>NON</td></tr><tr><td><code>-r</code> <code>-w</code> <code>-x</code></td><td>lisible, modifiable, exécutable</td><td><code>-s</code></td><td>taille non nulle</td></tr><tr><td><code>-L</code></td><td>lien symbolique</td><td><code>-nt</code> / <code>-ot</code></td><td>plus récent / plus ancien</td></tr></tbody></table>\n<p>Avec <code>[[ ... ]]</code>, on peut aussi tester un motif : <code>[[ \"$ch\" == *\"mot\"* ]]</code> ou une regex avec <code>=~</code>.</p>",
   "refs": {}
  },
  {
   "id": "s-5-4",
   "index": 16,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Boucles et fonctions",
   "content": "<h3>Boucles</h3>\n<pre><code>for i in {1..5}; do echo $i; done\n\nfor ((i=1; i&lt;=5; i++)); do echo $i; done\n\nn=1\nwhile [ $n -le 5 ]; do echo $n; ((n++)); done\n\nuntil [ $n -gt 10 ]; do echo $n; ((n++)); done</code></pre>\n<h3>Fonctions</h3>\n<pre><code>saluer () {\n  local prenom=$1          # variable locale, 1er paramètre\n  echo \"Bonjour $prenom\"\n  return 5                 # code de retour\n}\nsaluer Mars\necho \"Code retour : $?\"</code></pre>\n<p>Sans <code>local</code>, une variable modifiée dans la fonction l'est aussi à l'extérieur.</p>",
   "refs": {}
  },
  {
   "id": "s-5-5",
   "index": 17,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "Exemples utiles",
   "content": "<h3>Taille d'un dossier (paramètre de position)</h3>\n<pre><code>#!/bin/bash\ndu -sh $1        # ./taille.sh /var/log</code></pre>\n<h3>Chiffrer / déchiffrer un fichier avec options</h3>\n<pre><code>#!/usr/bin/env bash\nwhile getopts 'edf:' flag; do\n  case \"$flag\" in\n    e) mode=enc ;;\n    d) mode=dec ;;\n    f) file=$OPTARG ;;\n  esac\ndone\n[ -e \"$file\" ] || { echo \"Fichier introuvable\"; exit 1; }\nif [ \"$mode\" = enc ]; then gpg -c \"$file\"; else gpg -d \"$file\"; fi</code></pre>\n<p>Lancement : <code>./crypt.sh -e -f secret.txt</code></p>",
   "refs": {}
  },
  {
   "id": "s-5-6",
   "index": 18,
   "chapterId": "ch-5",
   "chapterTitle": "Scripting Bash",
   "title": "tmux",
   "content": "<p><strong>tmux</strong> (terminal multiplexer) permet de garder des sessions ouvertes même après déconnexion. Sous CentOS : <code>yum install epel-release tmux</code>.</p>\n<table><thead><tr><th>Action</th><th>Commande</th></tr></thead><tbody><tr><td>Lancer</td><td><code>tmux</code></td></tr><tr><td>Détacher la session (elle continue)</td><td><code>Ctrl+B</code> puis <code>D</code></td></tr><tr><td>Lister les sessions</td><td><code>tmux ls</code></td></tr><tr><td>Se rattacher</td><td><code>tmux a -t &lt;id&gt;</code></td></tr><tr><td>Scinder verticalement / horizontalement</td><td><code>Ctrl+B</code> puis <code>%</code> / <code>\"</code></td></tr><tr><td>Naviguer entre volets</td><td><code>Ctrl+B</code> + flèches</td></tr><tr><td>Nouvelle fenêtre</td><td><code>Ctrl+B</code> puis <code>C</code></td></tr><tr><td>Fenêtre suivante / précédente</td><td><code>Ctrl+B</code> puis <code>N</code> / <code>P</code></td></tr><tr><td>Quitter</td><td><code>exit</code></td></tr><tr><td>Tout tuer</td><td><code>pkill -f tmux</code></td></tr></tbody></table>",
   "refs": {}
  },
  {
   "id": "s-6-0",
   "index": 19,
   "chapterId": "ch-6",
   "chapterTitle": "Processus",
   "title": "Comprendre les processus",
   "content": "<p>Un <strong>processus</strong> est un programme en cours d'exécution.</p>\n<ul><li><strong>Premier plan</strong> (foreground) : interactif, attend l'utilisateur</li><li><strong>Arrière-plan</strong> (background) : s'exécute seul</li></ul>\n<h3>États d'un processus</h3>\n<table><thead><tr><th>État</th><th>Signification</th></tr></thead><tbody><tr><td>Running</td><td>En cours d'exécution</td></tr><tr><td>Sleeping</td><td>En pause (interruptible ou non)</td></tr><tr><td>Stopped</td><td>Arrêté</td></tr><tr><td>Zombie</td><td>Terminé, mais toujours présent dans la table des processus</td></tr></tbody></table>\n<h3>Contrôle</h3>\n<pre><code>commande &amp;       # lance en arrière-plan\nCtrl+Z           # suspend le processus\nCtrl+C           # interrompt le processus\nkill -9 &lt;PID&gt;    # force l'arrêt</code></pre>",
   "refs": {}
  },
  {
   "id": "s-6-1",
   "index": 20,
   "chapterId": "ch-6",
   "chapterTitle": "Processus",
   "title": "top, ps, kill, nice",
   "content": "<h3>top : suivi en temps réel</h3>\n<ul><li><code>top -u user</code> filtre par utilisateur, <code>top -n 1 -b &gt; top.txt</code> sauvegarde un instantané</li><li>Touches : <code>P</code> tri CPU, <code>M</code> tri mémoire, <code>k</code> tuer un PID, <code>c</code> chemin complet, <code>q</code> quitter</li></ul>\n<h3>ps : photo des processus</h3>\n<pre><code>ps -ef                               # tous les processus\nps aux --sort=-pcpu                  # tri par consommation CPU\nps -f -u user1                       # processus d'un utilisateur\nps -e -o pid,comm,etime              # colonnes choisies</code></pre>\n<h3>nice : priorité</h3>\n<pre><code>nice -n 10 commande       # démarrer avec une priorité plus basse\nrenice -n 5 -p &lt;PID&gt;      # modifier un processus en cours</code></pre>\n<p>Plus la valeur *nice* est haute, moins le processus est prioritaire.</p>",
   "refs": {}
  },
  {
   "id": "s-7-0",
   "index": 21,
   "chapterId": "ch-7",
   "chapterTitle": "CRON",
   "title": "Planifier des tâches",
   "content": "<p><strong>CRON</strong> exécute des commandes ou scripts à intervalles réguliers. On gère les tâches avec <code>crontab</code> :</p>\n<pre><code>crontab -e     # éditer\ncrontab -l     # lister\ncrontab -r     # supprimer\ncrontab -u ubuntu2 -e   # pour un autre utilisateur</code></pre>\n<h3>Syntaxe : 5 champs + commande</h3>\n<pre><code>* * * * *  commande\n│ │ │ │ └─ jour de la semaine (0-7, 0 et 7 = dimanche)\n│ │ │ └─── mois (1-12)\n│ │ └───── jour du mois (1-31)\n│ └─────── heure (0-23)\n└───────── minute (0-59)</code></pre>\n<table><thead><tr><th>Symbole</th><th>Sens</th><th>Exemple</th></tr></thead><tbody><tr><td><code>*</code></td><td>toutes les valeurs</td><td><code>* * * * *</code> chaque minute</td></tr><tr><td><code>,</code></td><td>liste</td><td><code>0 8,12 * * *</code> à 8h et 12h</td></tr><tr><td><code>-</code></td><td>intervalle</td><td><code>0 9 * * 1-5</code> en semaine à 9h</td></tr><tr><td><code>/</code></td><td>pas</td><td><code>*/2 * * * *</code> toutes les 2 minutes</td></tr></tbody></table>",
   "refs": {}
  },
  {
   "id": "s-8-0",
   "index": 22,
   "chapterId": "ch-8",
   "chapterTitle": "Services",
   "title": "Process, service, démon",
   "content": "<ul><li><strong>Processus</strong> : programme en cours d'exécution</li><li><strong>Service</strong> : un ou plusieurs processus qui tournent en arrière-plan (base de données, serveur web…)</li><li><strong>Démon</strong> : processus d'arrière-plan de longue durée, son nom finit souvent par « d » (<code>sshd</code>, <code>httpd</code>)</li><li><strong>Fichier d'unité</strong> : décrit à <strong>systemd</strong> comment gérer une ressource (<code>.service</code>, <code>.timer</code>, <code>.mount</code>, <code>.target</code>)</li></ul>\n<h3>CRON ou service ?</h3>\n<table><thead><tr><th>CRON</th><th>Service</th></tr></thead><tbody><tr><td>Basé sur le <strong>temps</strong></td><td>Basé sur le démarrage ou des <strong>événements</strong></td></tr><tr><td>Contexte de l'utilisateur</td><td>Niveau système</td></tr></tbody></table>\n<p>Les unités se trouvent dans <code>/lib/systemd/system</code> (Ubuntu) ou <code>/usr/lib/systemd/system</code> (CentOS). Ordre de priorité : <code>/etc/systemd/system</code> puis <code>/run/systemd/system</code> puis <code>/lib/systemd/system</code>.</p>",
   "refs": {}
  },
  {
   "id": "s-8-1",
   "index": 23,
   "chapterId": "ch-8",
   "chapterTitle": "Services",
   "title": "systemctl et journalctl",
   "content": "<pre><code>systemctl list-units --type service   # lister\nsystemctl start|stop|restart nginx    # démarrer, arrêter, relancer\nsystemctl reload nginx                # recharger la config sans arrêt\nsystemctl enable|disable nginx        # (dés)activer au démarrage\nsystemctl status nginx                # état du service\nsystemctl --failed --type=service     # services en erreur\nsystemctl cat nginx                   # voir le fichier d'unité\nsystemctl edit nginx                  # modifier (--full pour tout)\nsystemctl daemon-reload               # à lancer après une modification</code></pre>\n<h3>Les logs avec journalctl</h3>\n<pre><code>journalctl -u sshd          # logs d'un service\njournalctl -n 10 -u sshd    # 10 dernières lignes\njournalctl -f -u sshd       # suivi en temps réel\njournalctl --since yesterday</code></pre>",
   "refs": {}
  },
  {
   "id": "s-8-2",
   "index": 24,
   "chapterId": "ch-8",
   "chapterTitle": "Services",
   "title": "Créer un service personnalisé",
   "content": "<p><strong>1. Le script</strong> <code>/scripts/montimer.sh</code> (puis <code>chmod +x</code>) :</p>\n<pre><code>#!/bin/bash\nwhile true; do echo \"La date est $(date)\"; sleep 1; done</code></pre>\n<p><strong>2. Le fichier</strong> <code>/etc/systemd/system/montimer.service</code> :</p>\n<pre><code>[Unit]\nDescription=Mon premier service\n\n[Service]\nExecStart=/scripts/montimer.sh\n\n[Install]\nWantedBy=multi-user.target</code></pre>\n<p><strong>3. Activation :</strong></p>\n<pre><code>sudo systemctl daemon-reload\nsudo systemctl enable --now montimer\nsystemctl status montimer</code></pre>\n<h3>Types de service (<code>Type=</code>)</h3>\n<p><code>simple</code> (par défaut) · <code>forking</code> (le programme se démonise) · <code>oneshot</code> (tâche courte) · <code>notify</code> (prévient systemd quand il est prêt)</p>",
   "refs": {}
  },
  {
   "id": "s-8-3",
   "index": 25,
   "chapterId": "ch-8",
   "chapterTitle": "Services",
   "title": "Targets et timers",
   "content": "<h3>Target</h3>\n<p>Une <strong>target</strong> regroupe des unités démarrées ensemble (ex. <code>multi-user.target</code> : réseau, connexion…). Voir son contenu : <code>systemctl cat multi-user.target</code>.</p>\n<h3>Timer : l'alternative à CRON avec systemd</h3>\n<p>Un <code>.timer</code> déclenche un <code>.service</code> à intervalle ou à date fixe.</p>\n<pre><code># /etc/systemd/system/myMonitor.timer\n[Unit]\nDescription=Exemple de timer\n\n[Timer]\nUnit=ls-service.service\nOnCalendar=*-*-* *:*:00        # toutes les minutes\n\n[Install]\nWantedBy=timers.target</code></pre>\n<table><thead><tr><th>Option</th><th>Rôle</th></tr></thead><tbody><tr><td><code>OnBootSec</code></td><td>Délai après le démarrage</td></tr><tr><td><code>OnUnitActiveSec</code></td><td>Délai après la dernière activation</td></tr><tr><td><code>OnCalendar</code></td><td>Date / heure du calendrier</td></tr></tbody></table>\n<p>Raccourcis <code>OnCalendar</code> : <code>hourly</code>, <code>daily</code>, <code>weekly</code>, <code>monthly</code>, <code>yearly</code> ; <code>Mon..Fri *-*-* 08:00:00</code> = en semaine à 8h.</p>\n<pre><code>sudo systemctl enable --now myMonitor.timer\njournalctl -u ls-service.service -f</code></pre>",
   "refs": {}
  },
  {
   "id": "s-9-0",
   "index": 26,
   "chapterId": "ch-9",
   "chapterTitle": "Récapitulatif",
   "title": "À retenir",
   "content": "<ul><li>Tout est fichier ; la configuration est dans <code>/etc</code>, les logs dans <code>/var/log</code></li><li><code>ls -l</code>, <code>chmod</code>, <code>chown</code> : savoir lire et modifier les droits (r=4, w=2, x=1)</li><li><code>~/.bashrc</code> pour les alias, variables et le <code>PATH</code> ; <code>sudo</code> pour les droits admin</li><li>SSH par clé : <code>ssh-keygen</code> puis <code>ssh-copy-id</code></li><li>Bash : shebang, variables, <code>if</code>, <code>case</code>, boucles, fonctions, <code>chmod u+x</code></li><li><code>top</code>, <code>ps</code>, <code>kill</code> pour piloter les processus</li><li><code>crontab -e</code> pour planifier, <code>systemctl</code> et <code>journalctl</code> pour les services</li></ul>",
   "refs": {}
  }
 ]
};
