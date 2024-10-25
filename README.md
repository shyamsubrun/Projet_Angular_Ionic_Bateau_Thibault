# Refonte du Front-End - Bateau Thibault (2024-2025)

## Module : Résilience Technologique - Projet Angular Ionic

### Description
Ce projet consiste en une refonte du front-end de l'application de prise de rendez-vous pour **Bateau Thibault**, une entreprise de type AMAP (Association pour le Maintien d'une Agriculture Paysanne) spécialisée dans la vente de produits issus de la pêche en Normandie, du producteur directement au consommateur.  
L'application a été développée en utilisant **Angular** et **Ionic** pour le front-end, avec un back-end basé sur des fichiers **JSON** statiques simulant les données.

---

### Spécifications Techniques
- **Framework Front-End** : Angular + Ionic
- **Back-End Mock** : JSON statique

---

### Fonctionnalités
- **Prise de Rendez-Vous** : Interface utilisateur intuitive pour planifier les rendez-vous pour les clients de l'AMAP.
- **Gestion des Produits** : Visualisation des produits de la pêche et possibilité de les ajouter au panier.
- **Panier d'Achat** : Ajout et suppression de produits du panier, avec affichage du montant total.
- **Responsive Design** : Adaptation automatique de l'application selon l'orientation (portrait/paysage) et la taille de l'écran.
- **Ergonomie et Retours Utilisateurs** : Messages d'erreur personnalisés (e.g., 404, 500) avec feedback via toast.
- **Interactions Intuitives** : Support du swipe-back pour revenir à la page précédente.

---

### Structure de Données
Les données sont gérées via :
- **JSON statique** : Simule les interactions avec le back-end.
- **Requêtes dynamiques** : Pour récupérer des informations à jour via l'API REST.

Les champs de données incluent :
- **Produits** : Détails sur les produits de la pêche (nom, catégorie, prix, disponibilité, etc.).
- **Bateaux** : Informations sur les bateaux utilisés pour la pêche.
- **Points de Livraison** : Emplacements où les produits peuvent être récupérés par les clients.

---

### Remarques
- **Objectif de la refonte** : Moderniser l'application tout en conservant la logique de la version précédente, avec une plus grande flexibilité pour le design et l'expérience utilisateur.
- **Wireframes** : Ils servent de base pour le design de l'application, mais des améliorations peuvent être apportées tant qu'elles respectent l'expérience utilisateur habituelle.
