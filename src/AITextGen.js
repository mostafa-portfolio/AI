export function textGen(text,setState,status) {

    async function query(data) {
        const config = {
            API_KEY: import.meta.env.VITE_API_KEY
        }
        try{
            const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                headers: {
                    Authorization: `Bearer ${config.API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
            );
            const result = await response.json();
            return result;
        }
        catch(err){
            return err
        }
        
        
    }

    query({ 
        messages: [
            {
                role: "user",
                content: text,
            },
        ],
        model: "MiniMaxAI/MiniMax-M2.7:novita",
    }).then((response) => {
        if(response){
            setState(response.choices[0].message.content)
        }
        else if(status==="abort"){
            setState('')
        }
        else{
            setState(response.error)
        }
       
    })


}