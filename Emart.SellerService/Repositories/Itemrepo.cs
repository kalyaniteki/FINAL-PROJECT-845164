using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class Itemrepo : Iitem
    {
        private readonly EmartContext _context;
        public Itemrepo(EmartContext context)
        {
            _context = context;
        }
        public void Additems(Items items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetSubCategories(int categoryid)
        {
            var subCategory = _context.SubCategory.Where(e => e.Cid == categoryid).ToList();
            return subCategory;
        }
        public void Deleteitems(int id)
        {
            var i = _context.Items.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public Items GetItems(int id)
        {
            Items i = _context.Items.Find(id);
            return i;
        }

        public void Update(Items items)
        {
           
            _context.Items.Update(items);
            _context.SaveChanges();
        }

        public List<Items> Viewitems(int id)
        {
            List<Items> s = _context.Items.Where(e => e.Sellerid == id).ToList();
            return s;
        }
    }
}
