function verificar_palavras() {
    var cpu_correta = ['C', 'P', 'U'];
    var inputs_cpu = document.querySelectorAll(".cpu"); //Selecionar todos os inputs com classe "cpu"
    checkInputs(inputs_cpu, cpu_correta); //Função está lá embaixo

    var ula_correta = ['U', 'L', 'A'];
    var inputs_ula = document.querySelectorAll(".ula");
    checkInputs(inputs_ula, ula_correta);

    var registradores_correta = ['R', 'E', 'G','I','S','T','R','A','D','O','R','E','S'];
    var inputs_registradores = document.querySelectorAll(".registradores");
    checkInputs(inputs_registradores, registradores_correta);

    var ram_correta = ['R', 'A', 'M'];
    var inputs_ram = document.querySelectorAll(".ram");
    checkInputs(inputs_ram, ram_correta);
    
    var rom_correta = ['R', 'O', 'M'];
    var inputs_rom = document.querySelectorAll(".rom");
    checkInputs(inputs_rom, rom_correta);

    var eprom_correta = ['E', 'P', 'R','O','M'];
    var inputs_eprom = document.querySelectorAll(".eprom");
    checkInputs(inputs_eprom, eprom_correta);

    var flash_correta = ['F', 'L', 'A','S','H'];
    var inputs_flash = document.querySelectorAll(".flash");
    checkInputs(inputs_flash, flash_correta);

    var memoria_de_massa_correta = ['M', 'E', 'M','O','R','I','A','D','E','M','A','S','S','A'];
    var inputs_memoria_de_massa = document.querySelectorAll(".memoria_de_massa");
    checkInputs(inputs_memoria_de_massa, memoria_de_massa_correta);

    var dma_correta = ['D', 'M', 'A'];
    var inputs_dma = document.querySelectorAll(".dma");
    checkInputs(inputs_dma, dma_correta);

    var cs_correta = ['C', 'S'];
    var inputs_cs = document.querySelectorAll(".cs");
    checkInputs(inputs_cs, cs_correta);

    var address_bus_correta = ['A', 'D', 'D','R','E','S','S','B','U','S'];
    var inputs_address_bus = document.querySelectorAll(".address_bus");
    checkInputs(inputs_address_bus, address_bus_correta);

    var data_bus_correta = ['D', 'A', 'T','A','B','U','S'];
    var inputs_data_bus = document.querySelectorAll(".data_bus");
    checkInputs(inputs_data_bus, data_bus_correta);

    var i5_correta = ['I', '5'];
    var inputs_i5 = document.querySelectorAll(".i5");
    checkInputs(inputs_i5, i5_correta);

    var i7_correta = ['I', '7'];
    var inputs_i7 = document.querySelectorAll(".i7");
    checkInputs(inputs_i7, i7_correta);

    var dual_core_correta = ['D', 'U', 'A','L','C','O','R','E'];
    var inputs_dual_core = document.querySelectorAll(".dual_core");
    checkInputs(inputs_dual_core, dual_core_correta);

    var quad_core_correta = ['Q', 'U', 'A','D','C','O','R','E'];
    var inputs_quad_core = document.querySelectorAll(".quad_core");
    checkInputs(inputs_quad_core, quad_core_correta);

    var threds_correta = ['T', 'H', 'R','E','D','S'];
    var inputs_threds = document.querySelectorAll(".threds");
    checkInputs(inputs_threds, threds_correta);

    var cache_correta = ['C', 'A', 'C','H','E'];
    var inputs_cache = document.querySelectorAll(".cache");
    checkInputs(inputs_cache, cache_correta);
}

// Função principal!
function checkInputs(inputs, correto) {
    var campos = [];
    //Inserir os valores das inputs na lista campos
    for (var i = 0; i < inputs.length; i++) {
      var value = inputs[i].value;
      campos.push(value.toUpperCase());
    }

    //Impede de colorir os campos vazios e palavras não preenchidas completamente
    for (let i = 0; i < campos.length; i++) {
        if(campos[i] == ''){
            return;
        }
    }

    //Comparar campos com a resposta correta
    for (var i = 0; i < campos.length; i++) {
      if (campos[i] != correto[i]) {
        inputs[i].style.color = 'red';
      } else {
        inputs[i].style.color = 'green';
      }
    }
}