using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.UserServices.Models;

namespace Emart.UserServices.Repositories
{
   public  interface IUser
    {
        public Buyer BuyerLogin(string name,string pass);
        public Seller SellerLogin(string name, string pass);
        public void BuyerRegister(Buyer buyer);
        public void SellerRegister(Seller seller);
    }
}
