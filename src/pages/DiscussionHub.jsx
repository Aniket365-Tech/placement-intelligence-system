import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { MessageSquare, ThumbsUp, Plus, Search, User } from 'lucide-react';
import { discussionPosts } from '../data/mockData';

const DiscussionHub = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = discussionPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Discussion Hub</h2>
          <p className="text-slate-500">Connect with peers and share placement experiences.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={18} /> Ask Question
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search discussions..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-sm shadow-sm"
        />
      </div>

      <div className="space-y-4">
        {filteredPosts.map(post => (
          <Card key={post.id} className="hover:shadow-lg transition-all cursor-pointer">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <User size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{post.title}</h3>
                    <p className="text-xs text-slate-500">by {post.author} • {post.time}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp size={18} />
                    <span className="text-sm font-medium">{post.upvotes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <MessageSquare size={18} />
                    <span className="text-sm font-medium">{post.answers} answers</span>
                  </button>
                  <button className="ml-auto text-blue-600 text-sm font-semibold hover:underline">
                    View Thread →
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Ask a Question"
      >
        <form className="space-y-4">
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Question Title</label>
            <input 
              type="text" 
              placeholder="e.g., How to prepare for Google Technical Rounds?"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Description</label>
            <textarea 
              rows={6}
              placeholder="Provide details about your question..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block">Tags</label>
            <input 
              type="text" 
              placeholder="e.g., Google, Interview, Technical"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button 
              type="submit"
              className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Post Question
            </button>
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DiscussionHub;
