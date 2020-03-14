using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
   
    public class BuyerRepo : Ibuyer
    {
        private readonly EmartContext _context;
        public BuyerRepo(EmartContext context)
        {
            _context = context;
        }
        public void BuyItem(PurchaseHistory item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }
        public List<Cart> ViewCart(int id)
        {

           List<Cart> cart = _context.Cart.Where(e => e.Buyerid == id).ToList();
            return cart;

        }
        public void AddToCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }
    

        public void EditProfile(Buyer buyer)
        {
            _context.Update(buyer);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Buyer Getprofile(int id)
        {
            Buyer b = _context.Buyer.Find(id);
            return b;
        }

        public List<SubCategory> GetSubCategories(int categoryid)
        {
            var subCategory = _context.SubCategory.Where(e=>e.Cid==categoryid).ToList();
            return subCategory;
        }

        public int  GetCart(int id)
        {
            int gc = _context.Cart.Where(e => e.Itemid == id).ToList().Count();
            return gc;
        }

        public List<Items> SearchItems(string Iname)
        {
            var i = _context.Items.Where(e => e.Itemname == Iname).ToList();
            return i;
        }
        public void Deletecart(int id)
        {
            var i = _context.Cart.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }
        public List<PurchaseHistory> TransactionHistory(int bid)
        {
            var i=_context.PurchaseHistory.Where(e => e.Buyerid == bid).ToList();
            return i;
        }
    }
}
