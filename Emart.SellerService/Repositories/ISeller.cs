using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public interface ISeller
    {
       
        public void Editprofile(Seller seller);
        Seller Getprofile(int id);
    }
}
