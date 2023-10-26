using { Northwind as external } from './external/Northwind';
service MyServices {
    entity Customers as projection on external.Customers;
    entity Products as projection on external.Products;
}