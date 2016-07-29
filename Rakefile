require "rubygems"

desc "Deploy project to Github Pages"
task :deploy do
  puts "## Deploying to Github Pages"

  puts "## Generating site"
  system "gulp sass"
  system "jekyll build"

  cd "_site" do
    puts "## Pulling for new commits"
    system "git pull"

    system "git add --all"

    message = "Site deplyed at #{Time.now.utc}"
    puts "## Commiting: #{message}"
    system "git commit -m \"#{message}\""

    puts "## Pushing generated site"
    system "git push"

    puts "## Deploy Complete!"
  end
end
