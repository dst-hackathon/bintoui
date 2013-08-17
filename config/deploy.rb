set :application, "bintoui"
set :domain, 'm.binto.codedeck.com'
 
set :repository, 'git@github.com:dst-hackathon/bintoui.git'
set :branch, 'master'

# files will get copied over
set :deploy_via, :copy
 
# do not copy these files, adjust to your needs
set :copy_exclude, [".git", ".gitignore", "Capfile", ".config", "config/deploy.rb"]
 
set :user, 'deployer'
set :use_sudo, false
set :ssh_options, { :forward_agent => true }
 
# directory where our release and current directories will live
set :deploy_to, "/var/www/#{domain}"
 
role :web, domain
role :app, domain        
role :db,  domain, :primary => true
 
# Override default tasks which are not relevant to a non-rails app.
namespace :deploy do
  task :migrate do
    puts "Skipping migrate."
  end
  task :finalize_update do
    puts "Skipping finalize_update."
  end
  task :start do
    puts "Skipping start."
  end
  task :stop do 
    puts "Skipping stop."
  end
  task :restart do
    puts "Skipping restart."
  end
end
 
# leave only 5 releases
after "deploy", "deploy:cleanup"