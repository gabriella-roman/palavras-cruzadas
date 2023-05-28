function verificar_palavras() {
    // a variavel campos_(palavra) é a array que recebe as inputs, a variavel (palavra_correta) contem as letras que são as necessárias para validar, a variavel acertou_palavra é utilizada na estrutura de repetição.
    var campos_cpu = [];
    campos_cpu.push(document.getElementById('campo_c_cpu').value.toUpperCase());
    campos_cpu.push(document.getElementById('campo_p_cpu').value.toUpperCase());
    campos_cpu.push(document.getElementById('campo_u_cpu').value.toUpperCase());

    var cpu_correta = ['C', 'P', 'U'];
    var acertou_cpu = true;

    var campos_ula = [];
    campos_ula.push(document.getElementById('campo_u_ula').value.toUpperCase());
    campos_ula.push(document.getElementById('campo_l_ula').value.toUpperCase());
    campos_ula.push(document.getElementById('campo_a_ula').value.toUpperCase());

    var ula_correta = ['U', 'L', 'A'];
    var acertou_ula = true;

    var campos_registradores = [];
    campos_registradores.push(document.getElementById('campo_r_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_e_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_g_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_i_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_s_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_t_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_r_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_a_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_d_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_o_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_r_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_e_registradores').value.toUpperCase());
    campos_registradores.push(document.getElementById('campo_s_registradores').value.toUpperCase());

    var registradores_correta = ['R', 'E', 'G','I','S','T','R','A','D','O','R','E','S'];
    var acertou_registradores = true;
    
    var campos_ram = [];
    campos_ram.push(document.getElementById('campo_r_ram').value.toUpperCase());
    campos_ram.push(document.getElementById('campo_a_ram').value.toUpperCase());
    campos_ram.push(document.getElementById('campo_m_ram').value.toUpperCase());

    var ram_correta = ['R', 'A', 'M'];
    var acertou_ram = true;

    var campos_rom = [];
    campos_rom.push(document.getElementById('campo_r_rom').value.toUpperCase());
    campos_rom.push(document.getElementById('campo_o_rom').value.toUpperCase());
    campos_rom.push(document.getElementById('campo_m_rom').value.toUpperCase());

    var rom_correta = ['R', 'O', 'M'];
    var acertou_rom = true;

    var campos_eprom = [];
    campos_eprom.push(document.getElementById('campo_e_eprom').value.toUpperCase());
    campos_eprom.push(document.getElementById('campo_p_eprom').value.toUpperCase());
    campos_eprom.push(document.getElementById('campo_r_eprom').value.toUpperCase());
    campos_eprom.push(document.getElementById('campo_o_eprom').value.toUpperCase());
    campos_eprom.push(document.getElementById('campo_m_eprom').value.toUpperCase());

    var eprom_correta = ['E','P','R', 'O','M'];
    var acertou_eprom = true;

    var campos_flash = [];
    campos_flash.push(document.getElementById('campo_f_flash').value.toUpperCase());
    campos_flash.push(document.getElementById('campo_l_flash').value.toUpperCase());
    campos_flash.push(document.getElementById('campo_a_flash').value.toUpperCase());
    campos_flash.push(document.getElementById('campo_s_flash').value.toUpperCase());
    campos_flash.push(document.getElementById('campo_h_flash').value.toUpperCase());

    var flash_correta = ['F','L','A','S','H'];
    var acertou_flash = true;

    
    var campos_memoria_de_massa = [];
    campos_memoria_de_massa.push(document.getElementById('campo_m_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_e_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_m_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_o_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_r_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_i_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_a_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_d_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_e_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_m_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_a_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_s_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_s_memoria_de_massa').value.toUpperCase());
    campos_memoria_de_massa.push(document.getElementById('campo_a_memoria_de_massa').value.toUpperCase());

    var memoria_de_massa_correta = ['M', 'E', 'M','O','R','I','A','D','E','M','A','S','S','A'];
    var acertou_memoria_de_massa = true;

    var campos_dma = [];
    campos_dma.push(document.getElementById('campo_d_dma').value.toUpperCase());
    campos_dma.push(document.getElementById('campo_m_dma').value.toUpperCase());
    campos_dma.push(document.getElementById('campo_a_dma').value.toUpperCase());

    var dma_correta = ['D', 'M', 'A'];
    var acertou_dma = true;

    var campos_cs = [];
    campos_cs.push(document.getElementById('campo_c_cs').value.toUpperCase());
    campos_cs.push(document.getElementById('campo_s_cs').value.toUpperCase());

    var cs_correta = ['C', 'S'];
    var acertou_cs = true;

    var campos_address_bus = [];
    campos_address_bus.push(document.getElementById('campo_a_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_d_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_d_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_r_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_e_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_s_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_s_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_b_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_u_address_bus').value.toUpperCase());
    campos_address_bus.push(document.getElementById('campo_s_address_bus').value.toUpperCase());

    var address_bus_correta = ['A', 'D', 'D','R','E','S','S','B','U','S'];
    var acertou_address_bus = true;

    var campos_data_bus = [];
    campos_data_bus.push(document.getElementById('campo_d_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_a_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_t_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_a_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_b_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_u_data_bus').value.toUpperCase());
    campos_data_bus.push(document.getElementById('campo_s_data_bus').value.toUpperCase());

    var data_bus_correta = ['D', 'A', 'T','A','B','U','S'];
    var acertou_data_bus = true;

    var campos_i5 = [];
    campos_i5.push(document.getElementById('campo_i_i5').value.toUpperCase());
    campos_i5.push(document.getElementById('campo_5_i5').value);

    var i5_correta = ['I', '5'];
    var acertou_i5 = true;
    
    var campos_i7 = [];
    campos_i7.push(document.getElementById('campo_i_i7').value.toUpperCase());
    campos_i7.push(document.getElementById('campo_7_i7').value);

    var i7_correta = ['I', '7'];
    var acertou_i7 = true;

    var campos_dual_core = [];
    campos_dual_core.push(document.getElementById('campo_d_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_u_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_a_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_l_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_c_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_o_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_r_dual_core').value.toUpperCase());
    campos_dual_core.push(document.getElementById('campo_e_dual_core').value.toUpperCase());

    var dual_core_correta = ['D', 'U', 'A','L','C','O','R','E'];
    var acertou_dual_core = true;

    var campos_quad_core = [];
    campos_quad_core.push(document.getElementById('campo_q_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_u_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_a_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_d_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_c_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_o_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_r_quad_core').value.toUpperCase());
    campos_quad_core.push(document.getElementById('campo_e_quad_core').value.toUpperCase());

    var dual_core_correta = ['Q', 'U', 'A','D','C','O','R','E'];
    var acertou_quad_core = true;

    var campos_threads = [];
    campos_threads.push(document.getElementById('campo_t_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_h_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_r_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_e_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_a_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_d_threads').value.toUpperCase());
    campos_threads.push(document.getElementById('campo_s_threads').value.toUpperCase());

    var threds_correta = ['T', 'H', 'R','E','D','S'];
    var acertou_therads = true;

    var campos_cache = [];
    campos_cache.push(document.getElementById('campo_c_cache').value.toUpperCase());
    campos_cache.push(document.getElementById('campo_a_cache').value.toUpperCase());
    campos_cache.push(document.getElementById('campo_c_cache').value.toUpperCase());
    campos_cache.push(document.getElementById('campo_h_cache').value.toUpperCase());
    campos_cache.push(document.getElementById('campo_e_cache').value.toUpperCase());

    var threds_correta = ['C', 'A', 'C','H','E'];
    var acertou_cache = true;

    // gug: parei aqui
    // esse for verifica letra a letra das duas arrays verificando se elas são iguais, se forem ele mantem a variavem de acertou como true, se for falsa ele interrompe o código com o (break) e para o laço de repetição

    // danilo faz os outros for, que quando o front tiver pronto nós 3 vamos fazer os ifs pra mudar o background das palavras erradas
    for (var i = 0; i < campos_cpu.length; i++) {
        if (campos_cpu[i] !== cpu_correta[i]) {
            acertou_cpu = false;
            break;
        }
    }

    // apenas para verificar

    if (acertou_cpu) {
        alert('Parabéns! Você acertou a palavra!');
    } else {
        alert('Você errou. Tente novamente.');
    }
}