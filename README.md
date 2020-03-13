# README

## Project Overview
Pokemon Center is an ecommerce site selling products related to the popular Pokemon media franchise.  The site features a products page to view all products, and pages for individual product items. It includes a login and sign up feature.  Logged in users can view their shopping carts.  This project was built with a Ruby on Rails backend framework, using a PostgreSQL database. The frontend was built with React and Redux as a single page application.

* [Live Site](https://pokemon-center-app.herokuapp.com/#/)

## Technologies
Ruby on Rails, PostgreSQL, React, Redux


## Site Features
### User Authorization
Users can log in via the "sign in/ register" button on the navigation bar.  This button opens a modal in which you can sign in if you already have an account, or be redirected to the sign up page, which will take information from a user and use it to create a new user.  The sign in form also features a "Demo" button, which will log the user in as a demo user.

![](https://user-images.githubusercontent.com/37354663/76651354-92d54d00-6521-11ea-8b52-17d7bb38c432.png)

### Products Index Page
This page shows all of the products available for purchase.  Each product icon is a link to the individual product's product page.

![](https://user-images.githubusercontent.com/37354663/76650531-0d9d6880-6520-11ea-9dea-fa5a0aee0f9b.png)

### Product Show Page
This page shows details of the product, including a picture, product name, price, and description.  There is also a button to add the product to your cart.

![](https://user-images.githubusercontent.com/37354663/76651336-87822180-6521-11ea-84f0-35818365ecc5.png)

### Shopping Cart
Users can view their shopping cart items on the cart page, which you can access by pressing the "cart" button on the nav bar.  Users who are not logged in will get a message indicating that you must be signed in to view the shopping cart.
### Navigation Bar
The navigation bar displays the sign in logo when not logged in, which directs you to log in or sign up.  If the user is signed in, it will display the name of the user and the name will be a link to open the modal which renders the logout form. The logic for the icon was written as indicated:
```javascript     
    const account = currentUser ? (
        <div>
            <span className='sign_in_name' onClick={() => openModal('logout')}>{currentUser.name}</span>
        </div >
    ) : (
        <div>
            <span onClick={() => openModal('login')}>
                    <img className='sign_in_icon' src={window.sign_in_icon}/>
            </span>
            </div >
        ); 
 ```
