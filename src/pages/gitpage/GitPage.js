import React from 'react';
import './GitPage.css';

export default function GitPage() {
  return (
    <div className='GitContainer_main'>
      <div className='Gitpage_left'>
        <h1>Commands</h1>
        <ul className='git__list'>
          <li>Basic Git Commands</li>
          <li>Branching and Merging</li>
          <li>Working with Remote Repositories</li>
          <li>Stashing and Cleaning</li>
          <li>Undoing Changes</li>
        </ul>
      </div>
      <div className='Gitpage_right'>
        <h1>Details</h1>
        <div className='git__details'>
          <h2>1. Basic Git Commands</h2>
          <p>Common commands to initialize, clone, add, commit, and check status of your repository.</p>
          <pre>
            <code>{`
# Initialize a Git repository
git init

# Clone a repository
git clone <repository_url>

# Check the status
git status

# Add changes
git add <file_name>

# Commit changes
git commit -m "commit message"
            `}</code>
          </pre>
        </div>
        <div className='git__details'>
          <h2>2. Branching and Merging</h2>
          <p>Commands for creating, switching, and merging branches.</p>
          <pre>
            <code>{`
# Create a new branch
git branch <branch_name>

# Switch to a branch
git checkout <branch_name>

# Merge a branch
git merge <branch_name>

# Delete a branch
git branch -d <branch_name>
            `}</code>
          </pre>
        </div>
        <div className='git__details'>
          <h2>3. Working with Remote Repositories</h2>
          <p>Commands for adding, viewing, fetching, pulling, and pushing to remote repositories.</p>
          <pre>
            <code>{`
# Add a remote repository
git remote add <remote_name> <repository_url>

# View remote repositories
git remote -v

# Fetch changes
git fetch <remote_name>

# Pull changes
git pull <remote_name> <branch_name>

# Push changes
git push <remote_name> <branch_name>
            `}</code>
          </pre>
        </div>
        <div className='git__details'>
          <h2>4. Stashing and Cleaning</h2>
          <p>Commands to stash changes, apply stashed changes, and clean untracked files.</p>
          <pre>
            <code>{`
# Stash changes
git stash

# Apply stashed changes
git stash apply

# View stashed changes
git stash list

# Remove all untracked files
git clean -f
            `}</code>
          </pre>
        </div>
        <div className='git__details'>
          <h2>5. Undoing Changes</h2>
          <p>Commands to discard changes, unstage changes, reset commits, and revert commits.</p>
          <pre>
            <code>{`
# Discard changes in a file
git checkout -- <file_name>

# Unstage changes
git reset <file_name>

# Reset to a specific commit
git reset --soft <commit_id>
git reset --mixed <commit_id>  # default
git reset --hard <commit_id>

# Revert a commit
git revert <commit_id>
            `}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
