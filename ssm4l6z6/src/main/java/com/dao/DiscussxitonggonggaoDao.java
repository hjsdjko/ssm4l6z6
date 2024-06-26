package com.dao;

import com.entity.DiscussxitonggonggaoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussxitonggonggaoVO;
import com.entity.view.DiscussxitonggonggaoView;


/**
 * 系统公告评论表
 * 
 * @author 
 * @email 
 * @date 2022-03-13 15:24:00
 */
public interface DiscussxitonggonggaoDao extends BaseMapper<DiscussxitonggonggaoEntity> {
	
	List<DiscussxitonggonggaoVO> selectListVO(@Param("ew") Wrapper<DiscussxitonggonggaoEntity> wrapper);
	
	DiscussxitonggonggaoVO selectVO(@Param("ew") Wrapper<DiscussxitonggonggaoEntity> wrapper);
	
	List<DiscussxitonggonggaoView> selectListView(@Param("ew") Wrapper<DiscussxitonggonggaoEntity> wrapper);

	List<DiscussxitonggonggaoView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussxitonggonggaoEntity> wrapper);
	
	DiscussxitonggonggaoView selectView(@Param("ew") Wrapper<DiscussxitonggonggaoEntity> wrapper);
	

}
