const passport = require('passport');


module.exports = (app) =>{
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']    
})
);

app.get('/auth/google/callback',passport.authenticate('google',() =>{
    console.log('Authenticated');
}));


app.get('/profile', function() {
    console.log("Srikanth");
}
);

app.get('/error', function() {
    console.log("Srikanth");
}
);

}