export default function testPlug(server) {
    server.use(function(req, res, next) {
        console.log('This should be executed everytime in all the endpoints');
        next();
    });
}