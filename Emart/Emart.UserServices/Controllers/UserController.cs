using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.UserServices.Repositories;
using Emart.UserServices.Models;
using UserServices;


using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Emart.UserServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration configuration;

        private readonly IUser _repo;
        public UserController(IUser repo, IConfiguration configuration)
        {
            this.configuration = configuration;
            _repo = repo;
        }
        //[HttpGet]
        //[Route("BLogin/{name},{pass}")]
        //public IActionResult BuyerLogin(string name, string pass)
        //{
        //    try
        //    {
        //        return Ok(_repo.BuyerLogin(name, pass));
        //    }
        //    catch (Exception e)
        //    {
        //        return NotFound(e.InnerException.Message);
        //    }
        //}
        //[HttpGet]
        //[Route("SLogin/{name},{pass}")]
        //public IActionResult SellerLogin(string name, string pass)
        //{
        //    try
        //    {
        //        return Ok(_repo.SellerLogin(name, pass));
        //    }
        //    catch (Exception e)
        //    {
        //        return NotFound(e.InnerException.Message);
        //    }
        //}
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("loginb/{name}/{pass}")]
        public IActionResult BuyerLogin(string name, string pass)
        {
            Tokens token = null;
            try
            {
                Buyer buyer = _repo.BuyerLogin(name, pass);
                if (buyer != null)
                {
                    token = new Tokens() { buyerid = buyer.Id, token = GenerateJwtToken(name), message = "success" };
                }
                //return Ok(_repo.BuyerLogin(username, password));
                else
                {
                    token = new Tokens() { token = null, message = "Unsucess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("logins/{name}/{pass}")]
        public IActionResult SellerLogin(string name, string pass)
        {
            Tokens token = null;
            try
            {
                Seller seller = _repo.SellerLogin(name, pass);
                if (seller != null)
                {
                    token = new Tokens() { sellerid = seller.Id, token = GenerateJwtToken(name), message = "success" };
                }
                //return Ok(_repo.BuyerLogin(username, password));
                else
                {
                    token = new Tokens() { token = null, message = "Unsucess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    } 


}