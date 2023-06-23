import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  
// loggedInUser:any;
// constructor(){
//   const userData = localStorage.getItem('user');
//   if(userData){
//     this.loggedInUser = JSON.parse(userData);
//   }
// }
productName: string='';
price: number=0;
products: any[] = [];
filteredProducts: any[] = [];
searchQuery: string='';

constructor(private router: Router) { }

addProduct() {
  const newProduct = {
    name: this.productName,
    price: this.price
  };

    // Check for duplicate product
    const duplicateProduct = this.products.find(product => product.name.toLowerCase() === this.productName.toLowerCase());
    if (duplicateProduct) {
      alert('Product already exists!'); // Handle duplicate product
      return;
    }    
    this.products.push(newProduct);
    this.filterProducts(); 
    this.resetForm();

    // this.products.push(newProduct);
    // this.filteredProducts.push(newProduct);
    // Clear the form
    // this.productName = '';
    // this.price = 0;
  }
  filterProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  logout() {
    // Remove token from local storage or session storage
    localStorage.removeItem('token');
    this.router.navigate(['/loginpage']);
  }

  private resetForm() {
    this.productName = '';
    this.price = 0;
  }


}
