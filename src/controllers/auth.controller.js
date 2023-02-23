//import 


export const signUp = async (req, res) => {
    const {username, password} = req.body;
    res.json("signUp")

}

export const signIn = async (req, res) => {
    res.json("signin")
}