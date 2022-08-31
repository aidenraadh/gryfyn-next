export default async function Subscribe(req, res){
    const body = JSON.parse(req.body)
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validateEmail = emailPattern.test(body.email)
    if(validateEmail === false){
        return res.status(400).json({})
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'X-MailerLite-ApiDocs': 'true',
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': '8c569c7547905031e5272208f8e35262'
        },
        body: JSON.stringify({email: body.email})
    };    
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', options);
    // return res.status(400).json({})
    if(!response.ok){
        return res.status(400).json({})
    }
    const user = await response.json();
    res.status(200).json(user)
}