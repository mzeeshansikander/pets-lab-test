SOLUTION
========

Estimation
----------
Estimated: 5 hours

Spent: 4 hour 30 min


Solution
--------
Comments on your solution

Pages:
- index (product list page)
- product/[slug] (Single product page)

Components:
- Navbar
-Product
    - Product section (renders all card)
    - Product card (render product info)
    - Search panel (render filters)
-Container
-Spinner

Services
- product
    - getProducts (get All products with filters)
    - getProduct (get single product)

types:
-index.ts (include Product interface)

# Solution:
    Functionality on "/" route:

    Calling "GetProducts" function on useEffect in '/' route with dependency of page number in it which help in refetching the products on every page change, This page divided into two section "SearchPanel" and "ProductSection".
    The "ProductSection" component is responsible for rendering all the product cards.
    The "SearchPanel" components responsible for applying filter on the products,There were three filters "price", "tags", "Subscription", In this component a useEffect is called every time if there is a change in any on the above filter, this useEffect calls the "getProductsData" from the parent component which is then re-fetch the products based on the applied filters.

    Functionality on "/product/[slug]" route:

    This page call a "Server Side Function" to get the product details depend on the slug provided which is then render on the frontend if found.

## TEST CASES:

# Test Case 1:
    On Product list page
    expected: See a search panel on left
    expected: 6 products card on right
    expected: Next and previous button on bottom of products
    
# Test Case 2:
    On Product list page
    expected: To see Side bar filters on left
    expected: on click on "price < 30" on side filters only one card shows up

# Test Case 3:
    On Product list page
    expected: To see Side bar filters on left
    expected: on click on "Cats" on side filters 6 card will shows up

# Test Case 4:
    Visit the product page.
    expected: Should see product cards on right.
    expected: On click on the product card should redirect on the "product/[slug]" page.
    
# Test Case 5:
    Visit the product page.
    expected: Should see Two buttons next and previous on bottom of product cards.
    expected: On click on "Next" button next 6 cards would shows up.
    