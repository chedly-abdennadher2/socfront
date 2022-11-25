import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
livres :Array <any>;
data:any;
  constructor(private  livreservice: LivreService) { 

  }

  ngOnInit(): void {
    this.livreservice.getAll().subscribe(data => {
      this.livres = data;
    });


        }
 add () :void  
{	  this.livreservice.save({'titre':"ali",'auteur':'salah',dateedition:'2-2-2020','categorie':'action'}).subscribe(result => {
}); 
  
}
}
