export default async function Subscribe(req, res){
    const body = JSON.parse(req.body)
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'X-MailerLite-ApiDocs': 'true',
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': '8c569c7547905031e5272208f8e35262'
        },
        body: JSON.stringify({email: body.email, resubscribe: false, type: 'null'})
    };    
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', options);
    if(!response.ok){
        return res.status(400).json({})
    }
    const user = await response.json();
    res.status(200).json(user)
}