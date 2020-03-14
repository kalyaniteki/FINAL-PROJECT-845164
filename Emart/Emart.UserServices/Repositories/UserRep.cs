using Emart.UserServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Emart.UserServices.Repositories
{
    public class UserRep : IUser
    {
        private readonly EmartContext _context;
        public UserRep(EmartContext context)
        {
            _context = context;
        }
        public Buyer BuyerLogin(string name, string pass)
        {
            //var b = _context.Buyer.SingleOrDefault(e => e.Username == name && e.Password == pass);
            //if(b!=null)
            //{
            //    return ;
            //}
            //else
            //{
            //    return 0;
            //}
            Buyer x = _context.Buyer.SingleOrDefault(e => e.Username == name && e.Password == pass);
            return x;
        }

        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string name, string pass)
        {
            //var s = _context.Seller.SingleOrDefault(e => e.Username == name && e.Password == pass);
            //if (s != null)
            //{
            //    return true;
            //}
            //else
            //{
            //    return false;
            //}

            Seller x = _context.Seller.SingleOrDefault(e => e.Username == name && e.Password == pass);
            return x;
        }

        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
