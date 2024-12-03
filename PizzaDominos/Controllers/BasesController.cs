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
    public class BasesController : Controller
    {
        private PizzaDBEntities db = new PizzaDBEntities();

        // GET: Bases
        public ActionResult Index()
        {
            return View(db.Bases.ToList());
        }

        // GET: Bases/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Base @base = db.Bases.Find(id);
            if (@base == null)
            {
                return HttpNotFound();
            }
            return View(@base);
        }

        // GET: Bases/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Bases/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "BaseID,BaseName")] Base @base)
        {
            if (ModelState.IsValid)
            {
                db.Bases.Add(@base);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(@base);
        }

        // GET: Bases/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Base @base = db.Bases.Find(id);
            if (@base == null)
            {
                return HttpNotFound();
            }
            return View(@base);
        }

        // POST: Bases/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "BaseID,BaseName")] Base @base)
        {
            if (ModelState.IsValid)
            {
                db.Entry(@base).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(@base);
        }

        // GET: Bases/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Base @base = db.Bases.Find(id);
            if (@base == null)
            {
                return HttpNotFound();
            }
            return View(@base);
        }

        // POST: Bases/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Base @base = db.Bases.Find(id);
            db.Bases.Remove(@base);
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
