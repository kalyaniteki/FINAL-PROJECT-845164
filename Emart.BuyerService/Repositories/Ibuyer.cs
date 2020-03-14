using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public interface Ibuyer
    {
        List<Items> SearchItems(string Iname);
        public void BuyItem(PurchaseHistory item);
        public void EditProfile(Buyer buyer);
        Buyer Getprofile(int id);
        List<PurchaseHistory> TransactionHistory(int bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);
        List<Cart> ViewCart(int id);
        void AddToCart(Cart cart);
        int GetCart(int id);
        public void Deletecart(int id);

    }
}
