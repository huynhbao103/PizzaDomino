//using PizzaDominos.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace DoAnCuoiKy_LTW.Models
//{
//    public class Cart
//    {
//        List<CartItem> items = new List<CartItem>();
//        public IEnumerable<CartItem> Items
//        {
//            get { return items; }
//        }
//        public void Add_Product_Cart (Product _pro , int _quant = 1)
//        {
//            var item = Items.FirstOrDefault(s => s._product.ProID == _pro.ProID);
//            if (item == null)
//            {
//                items.Add(new CartItem
//                {
//                    _product = _pro,
//                    _quantity = _quant,


//                });
//            }
//            else
//                item._quantity += _quant;
//        }
//        public int Total_quantity()
//        {
//            return Items.Sum(s => s._quantity);
//        }
//        public decimal Total_price()
//        {
//            var total = items.Sum(s => s._quantity * s._product.Price);
//            return (decimal)total;
//        }
//        public void Update_quantity(int id, int _new_quan)
//        {
//            var item = items.Find(s => s._product.ProID == id);
//            if(item != null)
//            {
//                if(items.Find(s => s._product.Quantity > _new_quan) != null)
//                {
//                    item._quantity = _new_quan;
//                }
                
//                else item._quantity = 1;
//            }
//        }
//        public void Remove_CartItem(int id)
//        {
//            items.RemoveAll(s => s._product.ProID == id);
//        }
//        public void ClearCart()
//        {
//            items.Clear();
//        }
//    }
//    public class CartItem
//    {
//        public Product _product { get; set; }
//        public int _quantity { get; set; }
//    } 
//}