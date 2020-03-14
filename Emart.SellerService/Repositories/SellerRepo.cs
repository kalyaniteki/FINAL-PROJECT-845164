using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Emart.SellerService.Repositories
{
    public class SellerRepo : ISeller
    {
        private readonly EmartContext _context;
        public SellerRepo(EmartContext context)
        {
            _context = context;
        }
        public void Editprofile(Seller seller)
        {
            _context.Update(seller);
            _context.SaveChanges();
        }

        public Seller Getprofile(int id)
        {
           Seller s=_context.Seller.Find(id);
            return s;  
           
        }
    }
}
