import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../interfaces/compte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-compte',
  templateUrl: './delete-compte.component.html',
  styleUrls: ['./delete-compte.component.css']
})
export class DeleteCompteComponent implements OnInit {

  numero:String;
  compte:Observable<Compte>;
  PageCompte:any;

  constructor(private activatedRoute:ActivatedRoute,private service:ComptesService,private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.numero = params['numero']
  , err=>{
    console.log(JSON.parse(err._body).message);
  });


  this.service.getCompteByNumero(this.numero).
  subscribe(data=>{
    this.PageCompte=data;
      },

      err=>{
    console.log(err);
  })

  }
  onDeleteCompte(compte:Compte){
  let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce compte");
    if(confirm==true){
    this.service.deleteCompte(compte.numero)
    .subscribe(data=>{
      this.PageCompte.content.splice(

        this.PageCompte.content.indexOf(compte),1

      );
      alert("Compte Supprimé")
    },err=>{
      console.log(err);
      alert("Erreur! Compte non supprimé");
    })
  }
    this.router.navigate(['/list']);
  }

  annulerDelete(){
    this.router.navigate(['/list']);
  }
}


