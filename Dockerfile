FROM jenkins/jenkins:lts

# Switch to root user for installation processes
USER root

# Set the working directory
WORKDIR /home

# Update system and install prerequisites
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    unzip \
    libglib2.0-0 \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdbus-1-3 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    --no-install-recommends

# Install Node.js from Nodesource binaries
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs --no-install-recommends

# Install Playwright globally
RUN npm install -g playwright

# Use the Playwright command to install browser dependencies for Chromium
RUN playwright install-deps chromium

# Clean up apt cache and temporary files to reduce image size
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Add permissions for Jenkins user
RUN chmod -R 777 /var/jenkins_home

# Switch back to the jenkins user
USER jenkins
