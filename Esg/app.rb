# ESG Versão 1.1.0 By Lietson Dos Santos.

require 'colorize'

loop do
  system('clear')

  puts "\n [1] - Calcular"
  puts ' [2] - Informações'
  print ' [3] - '
  print "Sair\n".red

  print "\n value: ".green
  value = gets.chomp.to_i

  if value == 1.to_i

    puts "\n\n\n"
    puts "ax²+bx+c=0\n\n"

    print 'Digite o Valor de A: '
    a = gets.chomp.to_i

    print 'Digite o Valor de B: '
    b = gets.chomp.to_i

    print 'Digite o valor de C: '
    c = gets.chomp.to_i

    delta = (b * b) - (4 * a * c)

    if delta.negative?
      puts "\nDelta é negativo!".red
      print "\nDelta = "
      puts delta.to_s.red
      return

    else

      delta_raiz = Math.sqrt(delta)

      x1 = (-b + delta_raiz) / (2 * a)
      x2 = (-b - delta_raiz) / (2 * a)

      if b.negative? && c.negative?
        puts "\n\nA resultado da equação: #{a}X²#{b}X#{c}=0\n"
      elsif b.negative? && !c.negative?
        puts "\n\nA resultado da equação: #{a}X²#{b}X+#{c}=0\n"
      elsif !b.negative? && c.negative?
        puts "\n\nA resultado da equação: #{a}X²+#{b}X#{c}=0\n"
      else
        puts "\n\nA resultado da equação: #{a}X²+#{b}X+#{c}=0\n"
      end

      puts "Delta é igual a #{delta}"
      puts "A raiz quadrada de Delta é igual a #{delta_raiz} \n\n"

      puts "X1 = #{x1}"
      puts "x2 = #{x2}\n\n"


      print "\n\n Pretende Continuar? [S,n] "
      continue = gets.chomp.to_s

			if continue === 's' || continue === 'S' || continue == ''

			else
				puts "\n Obrigado Por ter usado o ESG, Espero que tenha gostado :>"
				puts " By Lietson dos santos\n\n"
				exit
			end
    end

  elsif value == 2
    system('clear')

    puts "\n [1] - Como fazer uma Equação do Segundo Grau?"
    puts ' [2] - Sobre'
    print ' [3] - '
    print "Sair\n".red

    print "\n value: ".green
    value = gets.chomp.to_i

    if value == 1.to_i
      system('clear')
      puts File.readlines('Data')
      exit
    elsif value == 2
      system('clear')
      puts """
        Nome: ESG - Equação do Segundo Grau
        Versão: 1.1.0
        Autor: Lietson Dos Santos
        Data de Criação: 13/03/2021 11:34
        Última actualização: 28/04/2021 00:13

        Objectivo: Este app foi criado para facilitar a resolução de equações do segundo Grau.
        """

      puts "\n\n"

      print 'Click em qualquer tecla para continuar... '
      gets

    elsif value == 3
      puts "\n Obrigado Por ter usado o ESG, Espero que tenha gostado :>"
      puts ' By Lietson Dos Santos'
      exit

    else
      puts 'Opção Inválida!'
    end

  elsif value == 3
    puts "\n Obrigado Por ter usado o ESG, Espero que tenha gostado :>"
    puts " By Lietson dos santos\n\n"
    exit
  else
    puts 'Opeção inválida!'
  end

  break if value == 3
end
