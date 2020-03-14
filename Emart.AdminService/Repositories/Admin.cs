using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
   public interface Admin
    {
        public void AddCategory(Category category);
        public void AddSubCategory(SubCategory subCategory);
        public void DeleteCategory(int id);
        public void DeleteSubCategory(int id);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categoryid);
        Category GetCategoryById(int id);
        SubCategory GetSubCategoryById(int id);
        public void Updatecategory(Category category);
        public void Updatesubcategory(SubCategory subCategory);


    }
}
