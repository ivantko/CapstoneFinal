# Capstone

* [Individual Option](#individual-e-commerce-app-requirements)
* [Deliverables](#deliverables)
* [Created Project Board](#project-board)
* [Created Wire Frame](#wire-frame)

## Individual E-Commerce App Requirements 

### Tier 1: MVP (Minimum Viable Product)

Tier 1 relies on this third party [API](https://fakestoreapi.com/). This allows you to complete all aspects below. We highly encourage you to “go all the way” and make a back-end application. It is, however, not required.

Create a fully-functional front-end application from scratch or use the template provided by your instructor. 

**AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:**
- [ ] Access the website via the internet so I can browse and purchase products. (Deployed on a front end host)
- [] View all available products.
- [] View the details for an individual product, including product descriptions, photos, price, etc.
- [ ] Sort products by certain characteristics (name, price, etc.).
- [] Filter products by certain characteristics (category, type, maximum/minimum price, etc.).
- [ ] Enjoy an aesthetically pleasing website with intuitive and easy to use UI/UX

**AS A USER (LOGGED IN), I SHOULD BE ABLE TO:**
- [ ] Add an item to my cart
- [ ] Have a persistent cart to revisit and pick up where I left off.
    - For example, I add items to my cart, close my window and go back to the website later, those items should persist.
- [ ] Edit my cart if I change my mind:
    - Change the quantity of a product in my cart.
    - Remove a product from my cart.
- [ ] "Check out" the items in my cart, i.e., purchase the products.

Think of the user experience when checking out on a typical e-commerce site like Amazon, etc. You can start by simulating the experience of checking out with a simple confirmation page.

### Tier 2: E-Commerce Stretch

**AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:**
* [ ] All website features usable no matter my device type (phone, tablet, laptop, desktop)
* [ ] UI tailored to my device size (phone, tablet, laptop, desktop)
* [ ] Navigate the website successfully regardless of ability.
    - This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
    - Resources:
        * [Ally Checklist](https://www.a11yproject.com/checklist/)
        * [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [ ] Know when content is loading or if there is an error, so I can manage my expectations as a user
    - Examples: 
        * Show loading indicators while the frontend is waiting for a backend response.
        * If I visit a product page that does not exist, notify me and give me a link to go to a list of all products or back to the previous page.
* [ ] Enhance shopping cart functionality
    - When I open the browser on a different device and log in, I want to see those items in my cart (Requires persistent DB and API)
    - No one else should be able to edit my cart except me (Requires persistent DB and API)
* [ ] Add a real Stripe API to the checkout workflow (Requires custom back end (DB and API) OR localStorage)
* [] Write a review for a product. This can be a modal, an on-page form, or a rating icon (Five Stars)

**AS A USER (LOGGED IN), I SHOULD BE ABLE TO:**
* [ ] Remain logged in on separate sessions. (Requires custom back end (DB and API) OR localStorage)
* [ ] See my order history to remember my previously purchased items and their prices at the time of purchase. (Requires custom back end (DB and API) OR localStorage)
* [ ] View and edit my user profile so I can update my information when necessary. (Requires custom back end (DB and API) OR localStorage)
* [ ] Product reviews should be associated with the correct user. (Requires custom back end (DB and API) OR localStorage)