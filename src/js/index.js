const input = document.querySelectorAll(".informacoes", ".informacoes-mensagem");
formulario.addEventListener("submit", (event) =>{
    event.preventDefault ();

    input.forEach((item) => {
        let mensagem = document.querySelectorAll(".Erro");
        let itemValue = item.value;
        
        mensagem.forEach((itemErro) => {
            let formItem = item.parentElement;
            if (itemValue === "") {
              formItem.classList.add("false");
              formItem.classList.remove("true");
            }
            else {
              formItem.classList.remove("false");
              formItem.classList.add("true");
            }
        });
      });
    });



