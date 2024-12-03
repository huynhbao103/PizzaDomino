using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PizzaDominos.Models;

namespace PizzaDominos.Controllers
{
    public class ProductsController : Controller
    {
        private PizzaDBEntities db = new PizzaDBEntities();

        // GET: Products
        public ActionResult Index()
        {
            var products = db.Products.Include(p => p.Category).Include(p => p.Filling);
            return View(products.ToList());
        }

        // GET: Products/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // GET: Products/Create
        public ActionResult Create()
        {
            ViewBag.CatID = new SelectList(db.Categories, "CatID", "CateName");
            ViewBag.FillingID = new SelectList(db.Fillings, "FillingID", "FillingName");
            return View();
        }

        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProID,ProName,CatID,FillingID,ProImage,NameDecription,Thumnail," + "UploadProImage,UploadThumnail")] Product product)
        {
            if (ModelState.IsValid)
            {
                if (product.UploadProImage != null)
                {
                    string path = "~/Content/image/";
                    string filename = Path.GetFileName(product.UploadProImage.FileName);
                    product.ProImage = path + filename;
                    product.UploadProImage.SaveAs(Path.Combine(Server.MapPath(path), filename));
                }
                if (product.UploadThumnail != null)
                {
                    string path = "~/Content/image/";
                    string filename = Path.GetFileName(product.UploadThumnail.FileName);
                    product.Thumnail = path + filename;
                    product.UploadThumnail.SaveAs(Path.Combine(Server.MapPath(path), filename));
                }
                db.Products.Add(product);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CatID = new SelectList(db.Categories, "CatID", "CateName", product.CatID);
            ViewBag.FillingID = new SelectList(db.Fillings, "FillingID", "FillingName", product.FillingID);
            return View(product);
        }
        

        // GET: Products/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            ViewBag.CatID = new SelectList(db.Categories, "CatID", "CateName", product.CatID);
            ViewBag.FillingID = new SelectList(db.Fillings, "FillingID", "FillingName", product.FillingID);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]

       
        public ActionResult Edit([Bind(Include = "ProID,ProName,CatID,FillingID,ProImage,NameDecription,Thumnail," + "UploadProImage,UploadThumnail")] Product product)
        {
            if (ModelState.IsValid)
            {
                if (product.UploadProImage != null)
                {
                    string path = "~/Content/image/";
                    string filename = Path.GetFileName(product.UploadProImage.FileName);
                    product.ProImage = path + filename;
                    product.UploadProImage.SaveAs(Path.Combine(Server.MapPath(path), filename));
                }
                if (product.UploadThumnail != null)
                {
                    string path = "~/Content/image/";
                    string filename = Path.GetFileName(product.UploadThumnail.FileName);
                    product.Thumnail = path + filename;
                    product.UploadThumnail.SaveAs(Path.Combine(Server.MapPath(path), filename));
                }
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CatID = new SelectList(db.Categories, "CatID", "CateName", product.CatID);
            ViewBag.FillingID = new SelectList(db.Fillings, "FillingID", "FillingName", product.FillingID);
            return View(product);

        }

        // GET: Products/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
