using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public interface Iitem
    {
        public void Additems(Items items);
        List<Items> Viewitems(int id);
        public void Deleteitems(int id);
        public void Update(Items items);
        Items GetItems(int id);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);
    }
}
