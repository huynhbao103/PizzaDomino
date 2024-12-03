using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using PizzaDominos.Models;

namespace PizzaDominos.Controllers
{
    public class ProDetailsController : Controller
    {
        private PizzaDBEntities db = new PizzaDBEntities();

        // GET: ProDetails
        public ActionResult Index()
        {
            var proDetails = db.ProDetails.Include(p => p.Product).Include(p => p.Size);
            return View(proDetails.ToList());
        }

        // GET: ProDetails/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProDetail proDetail = db.ProDetails.Find(id);
            if (proDetail == null)
            {
                return HttpNotFound();
            }
            return View(proDetail);
        }

        // GET: ProDetails/Create
        public ActionResult Create()
        {
            
            ViewBag.ProID = new SelectList(db.Products, "ProID", "ProName");
            
            ViewBag.SizeID = new SelectList(db.Sizes, "SizeID", "SizeName");
            
            return View();
        }

        // POST: ProDetails/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ProDeID,ProID,BaseID,SizeID,ToppingID,RimID,Price,RemainQuantity,SoldQuantity,ViewQuantity")] ProDetail proDetail)
        {
            if (ModelState.IsValid)
            {
                db.ProDetails.Add(proDetail);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            
            ViewBag.ProID = new SelectList(db.Products, "ProID", "ProName", proDetail.ProID);
            
            ViewBag.SizeID = new SelectList(db.Sizes, "SizeID", "SizeName", proDetail.SizeID);
            
            return View(proDetail);
        }

        // GET: ProDetails/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProDetail proDetail = db.ProDetails.Find(id);
            if (proDetail == null)
            {
                return HttpNotFound();
            }
            ViewBag.ProID = new SelectList(db.Products, "ProID", "ProName", proDetail.ProID);

            ViewBag.SizeID = new SelectList(db.Sizes, "SizeID", "SizeName", proDetail.SizeID);
            return View(proDetail);
        }

        // POST: ProDetails/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProDeID,ProID,BaseID,SizeID,ToppingID,RimID,Price,RemainQuantity,SoldQuantity,ViewQuantity")] ProDetail proDetail)
        {
            if (ModelState.IsValid)
            {
                db.Entry(proDetail).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ProID = new SelectList(db.Products, "ProID", "ProName", proDetail.ProID);

            ViewBag.SizeID = new SelectList(db.Sizes, "SizeID", "SizeName", proDetail.SizeID);
            return View(proDetail);
        }

        // GET: ProDetails/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProDetail proDetail = db.ProDetails.Find(id);
            if (proDetail == null)
            {
                return HttpNotFound();
            }
            return View(proDetail);
        }

        // POST: ProDetails/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ProDetail proDetail = db.ProDetails.Find(id);
            db.ProDetails.Remove(proDetail);
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
