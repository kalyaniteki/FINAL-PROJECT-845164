using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly Admin _repo;
        public AdminController(Admin repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddC")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategory(category);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetC")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetS/{categoryid}")]
        public IActionResult GetSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteC/{id}")]
        public IActionResult DeleteCategory(int id)
        {
            try
            {
                _repo.DeleteCategory(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteS/{id}")]
        public IActionResult DeleteSubCategory(int id)
        {
            try
            {
                _repo.DeleteSubCategory(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddS")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updateC")]
        public IActionResult Updatecategory(Category category)
        {
            try
            {
                _repo.Updatecategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("updateS")]
        public IActionResult Updatesubcategory(SubCategory scategory)
        {
            try
            {
                _repo.Updatesubcategory(scategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCatbyid/{id}")]
        public IActionResult GetCategoryById(int id)
        {
            try
            {
                return Ok(_repo.GetCategoryById(id));

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCatbyid/{id}")]
        public IActionResult GetSubCategoryById(int id)
        {
            try
            {
                return Ok(_repo.GetSubCategoryById(id));

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

    }
}