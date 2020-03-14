using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class Adminrepo : Admin
    {
        private readonly EmartContext _context;
        public Adminrepo(EmartContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public Category GetCategoryById(int id)
        {
            Category i = _context.Category.Find(id);
            return i;
        }
        public SubCategory GetSubCategoryById(int id)
        {
            SubCategory i = _context.SubCategory.Find(id);
            return i;
        }

        public void AddSubCategory(SubCategory subCategory)
        {
            _context.Add(subCategory);
            _context.SaveChanges();
        }
        public void DeleteCategory(int id)
        {
            var i = _context.Category.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(int id)
        {
            var i = _context.SubCategory.Find(id);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public void Updatecategory(Category category)
        {
           
            _context.Category.Update(category);
            _context.SaveChanges();

        }
        public void Updatesubcategory(SubCategory subCategory)
        {

            _context.SubCategory.Update(subCategory);
            _context.SaveChanges();

        }
        public List<SubCategory> GetSubCategories(int categoryid)
        {
            var subCategory = _context.SubCategory.Where(e => e.Cid == categoryid).ToList();
            return subCategory;
        }
    }
}
