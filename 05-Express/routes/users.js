import express from 'express'

const router = express.Router();

router.post('/', (req, res) => {
    // Reading from body of request and rendering
    // res.send(`Hi ${req.body.firstName}`);

    const isValid = true;
    if (isValid) {
        users.push(req.body.firstName);
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error");
        res.render('users/new', {firstName: req.body.firstName});
    }
});

router.get("/new", (req, res) => {
    res.render("users/new", {firstName: "Rishil"});
});


// router.get("/:id", (req, res) => {
//     res.send(`Hey, USER ${req.params.id}`);
// });

// CREATE Multiple routes with same path but different methods
router
    .route("/:id")
        .get((req, res) => {
            res.send(`USER GET ${req.params.id} => ${req.user}`);
        })
        .post((req, res) => {
            res.send(`USER POST ${req.params.id} => ${req.user}`);
        })
        .put((req, res) => {
            res.send(`USER PUT ${req.params.id} => ${req.user}`);
        })
        .delete((req, res) => {
            res.send(`USER DELETE ${req.params.id} => ${req.user}`);
        });

const users = ["Rishil", "Ramesh", "Ashwin", "Ajitha"];


// Middleware like code: For any path that has URL parameter id, this code will run before actual route
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
})


export default router;