using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using NUnit.Framework;
namespace TestEmart
{
    public class TestAdminService
    {
        Adminrepo _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new Adminrepo(new EmartContext());
        }
        [Test]
        [Description("Test Add Category")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Cid = 55,
                Cname = "Iron1",
                Briefdetails = "iron"
            });
            var result = _repo.GetCategories();
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddSubcategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                Sid = 555,
                Sname = "Box",
                Cid = 55,
                Briefdetails = "its box",
                Gst="34",
            });
            var result = _repo.GetSubCategories(55);
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(55);
            var result = _repo.GetCategoryById(55);
            Assert.Null(result);
        }
        [Test]
        public void TestDeleteSubcategory()
        {
            _repo.DeleteSubCategory(555);
            var result = _repo.GetSubCategoryById(555);
            Assert.Null(result);
        }
        [Test]
        public void TestUpdatecat()
        {

            Category category = _repo.GetCategoryById(55);
            category.Briefdetails = "Chocolates";
            _repo.Updatecategory(category);
            Category category1 = _repo.GetCategoryById(55);
            Assert.AreSame(category, category1);
        }
        [Test]
        public void TestUpdatescat()
        {

            SubCategory subcategory = _repo.GetSubCategoryById(555);
            subcategory.Briefdetails = "Chocolates";
            _repo.Updatesubcategory(subcategory);
            SubCategory subcategory1 = _repo.GetSubCategoryById(555);
            Assert.AreSame(subcategory, subcategory1);
        }

        }
}
