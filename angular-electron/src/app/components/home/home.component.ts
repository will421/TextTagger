import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = 
  `ARRAAAAAAAAAAAH !
  Le guetteur se mit à crier quand il a vu les camions de police arriver je me suis mis à courir de toutes vitesse qui a bousculer tous mes collègues j'ai commencé à couper par le parc puis j'ai tourné à droite vers le parking sauf qu'à ce moment je croise un policier devant moi je refais demi-tour vers la zone le policier se met à courir derrière moi je saute l'escalier puis je me mets dans l'allé 3 puisque la porte de l'allé est cassé donc elle est toujours  ouverte de plus dans la cave il y a une porte qui mène vers le toit des garage. Au moment où je saute sur le garage je fais tomber ma sacoche.
  1 semaine plus tard j'avais rendez-vous a Algerisas pour une cargaison le seul problème c'est que j'étais rechercher a présent c'est comme si je me jetais dans la gueule du loup mais ce n'est pas grave car là c'est un gros coup du coup je me rendis a Audi vers 2h00 du matin. J'ai cassé la vitre d'un RS4. J'ai fait les files et j'ai démarré la voiture et je suis allé à la station mis un plein et pris la A7 pour rejoindre mon fournisseur. Une fois arriver à Algesiras je suis allé voir Pacho mon fournisseur il ma donner mon bon de réception. Et je suis parti direction à Marbella pour aller en boite. C'était un truc de fou musique à fond fille a volonté je suis allé pisser pris un rail et je suis ressortit j'ai vu les shmit rentrer dans la boite. J'ai bloqué la porte d'entrer des toilette et je suis sorti par la fenêtre et je suis rentré sur Grenoble.
  Au lendemain de cette histoire, j'étais très chamboulé et fatigué de la course poursuite de la ville.
  Je me suis dit « c'est bon je dois changer ! » J'ai appelé Pole Emploi. Je leur ai dit « Bonjour 
  Je voudrais parler à Paul » elle m'a répondu «  Paul qui « J'ai répondu Paul Emploi », puis j'ai dit que c'était une blague et j'ai demandé à prendre un rendez-vous pour chercher un emploi. Je suis allé au rendez-vous, là-bas il mont proposer un rendez-vous  d'embauches chez carrefour, J'ai accepté une fois au rendez-vous, je suis monté à l'étage dans des bureaux c'était un homme j'ai répondu à ses questions il m'a vus motivé, intelligent prêt à faire n'importe quel tache et il ma prit.
  Hélas j'ai tenu qu'une semaine car pour moi je n'arrive pas travailler seulement pour un smic est-ce que je suis attiré par l'argent ? Je me suis fait viré car j'ai demandé un acompte et il m'a dit que c'était trop tôt j'ai insisté et il mal répondu du coup je suis parti a en claquant la porte et en cassant des pots en verre et je suis rentré au quartier et j'ai repris mes affaires.`
    ;

  computed : {content:string, type:"word"|"other"}[];
  constructor() { }

  ngOnInit() {
    this.computed = this.data.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+|[^A-Za-zÀ-ÖØ-öø-ÿ]+/g)
      .map(el => {
        let type;
        if(el.match(/\w+/)){
          type = "word";
        } else {
          type = "other";
        }
        return {content : el,type:type};
      })
  }

}
