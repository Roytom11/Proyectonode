function getUsers(res, req, next)  {

    try {    const options ={
        params: req.params,
        query: req.query,
        body: req.body,
        header: req.headers,
    };
    const { id } = req.query;
    if (!id) { res.status(400).json({ error: 'error id' }); }
    res.status(200).json({ id });

    } catch (error) {
        res.status(500).json({ error: 'error ' });
    }
    
    module.exports = { getUsers};
}

